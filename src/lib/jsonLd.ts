/**
 * Serialize a value for injection inside a <script> tag.
 * Escapes `<` so that `</script>` in any string field cannot break out of the
 * enclosing script element. Safe for application/ld+json injection via
 * `dangerouslySetInnerHTML`.
 */
export function toJsonLdScript(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
