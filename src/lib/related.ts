import { Story } from "@/types/story";

// Picks the most closely related story by what the stories are about, not just
// by exact tag matches. Each story becomes a weighted bag of words (title, tags
// and excerpt count more than the body), compared with TF-IDF cosine similarity,
// then blended with how many tags the two share.

const STOP_WORDS = new Set(
  (
    "about above after again against all also and any are because been before being below between both but can could " +
    "did does doing down during each even every few for from further had has have having here how into its itself just " +
    "like make makes made many more most much must need needs not now off once only other our out over own same should " +
    "since some such than that the their them then there these they this those through too under until upon use used " +
    "uses using very was way ways well were what when where which while who why will with within without would yet you " +
    "your yours one two three new get gets got let lets via per see step steps guide com www doesn isn didn won may " +
    "might still something anything everything really quite enough"
  ).split(" "),
);

const WEIGHTS = { title: 3, tags: 3, excerpt: 2, body: 1 };
// The rest of the score comes from shared tags, which are chosen on purpose and
// so count for more than an accidental shared word
const TEXT_SHARE = 0.6;

type Vector = Map<string, number>;

export type RelatedStory = {
  story: Story;
  matchingTag?: string;
};

function tokenize(text: string): string[] {
  return (
    text
      .toLowerCase()
      // Code blocks are mostly commands and config keys, and link targets are
      // URLs and email addresses; both add noise
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/\]\([^)]*\)/g, "]")
      .replace(/https?:\/\/\S+/g, " ")
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length >= 3 && !/^\d+$/.test(w) && !STOP_WORDS.has(w))
      // Light stemming so "services" and "service" count as one word
      .map((w) => (w.length > 4 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w))
  );
}

function termCounts(story: Story): Vector {
  const counts: Vector = new Map();
  const add = (text: string, weight: number) => {
    for (const word of tokenize(text)) counts.set(word, (counts.get(word) ?? 0) + weight);
  };
  add(story.title ?? "", WEIGHTS.title);
  add((story.tags ?? []).join(" "), WEIGHTS.tags);
  add(story.excerpt ?? "", WEIGHTS.excerpt);
  add(story.content ?? "", WEIGHTS.body);
  return counts;
}

function tfidfVectors(stories: Story[]): Map<Story, Vector> {
  const counts = stories.map(termCounts);
  const docFrequency = new Map<string, number>();
  counts.forEach((c) => c.forEach((_, word) => docFrequency.set(word, (docFrequency.get(word) ?? 0) + 1)));

  const vectors = new Map<Story, Vector>();
  stories.forEach((story, i) => {
    const total = Array.from(counts[i].values()).reduce((a, b) => a + b, 0) || 1;
    const vector: Vector = new Map();
    counts[i].forEach((count, word) => {
      const idf = Math.log(1 + stories.length / (docFrequency.get(word) ?? 1));
      vector.set(word, (count / total) * idf);
    });
    vectors.set(story, vector);
  });
  return vectors;
}

function cosine(a: Vector, b: Vector) {
  let dot = 0;
  a.forEach((weight, word) => (dot += weight * (b.get(word) ?? 0)));
  const norm = (v: Vector) => Math.sqrt(Array.from(v.values()).reduce((sum, w) => sum + w * w, 0));
  const denominator = norm(a) * norm(b);
  return denominator ? dot / denominator : 0;
}

// Tags are compared word by word, so "Security" matches "api-security"
// and "DevOps" matches "devops-best-practices"
function tagWords(story: Story) {
  return new Set(tokenize((story.tags ?? []).join(" ")));
}

function sharedTags(current: Story, candidate: Story) {
  const currentWords = tagWords(current);
  return (candidate.tags ?? []).filter((tag) => tokenize(tag).some((w) => currentWords.has(w)));
}

function tagOverlap(current: Story, candidate: Story) {
  const a = tagWords(current);
  const b = tagWords(candidate);
  const shared = Array.from(a).filter((w) => b.has(w)).length;
  const union = new Set(Array.from(a).concat(Array.from(b))).size;
  return union ? shared / union : 0;
}

/**
 * The story of the given type that is most closely related to `current`,
 * or the newest one of that type when nothing relates at all.
 */
export function findRelatedStory(
  current: Story,
  allStories: Story[],
  type: Story["type"],
): RelatedStory | null {
  const candidates = allStories.filter((s) => s.type === type && s.slug !== current.slug);
  if (candidates.length === 0) return null;

  const corpus = allStories.some((s) => s.slug === current.slug) ? allStories : [...allStories, current];
  const vectors = tfidfVectors(corpus);
  const currentVector = vectors.get(corpus.find((s) => s.slug === current.slug) ?? current)!;

  const scored = candidates
    .map((story) => ({
      story,
      score: TEXT_SHARE * cosine(currentVector, vectors.get(story)!) + (1 - TEXT_SHARE) * tagOverlap(current, story),
    }))
    .sort((a, b) => b.score - a.score);

  const best = scored[0].score > 0 ? scored[0].story : candidates[0];
  return { story: best, matchingTag: sharedTags(current, best)[0] };
}
