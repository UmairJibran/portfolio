import { useEffect, useState } from "react";

import "./activity.css";

import PushEventContainer from "../githubEvents/pushEvent";
import CreateEventContainer from "../githubEvents/createEvent";
import CommentEventContainer from "../githubEvents/commentEvent";
import PullRequestEventContainer from "../githubEvents/pullRequestEvent";
import IssueEventContainer from "../githubEvents/issueEvent";
import ForkEventContainer from "../githubEvents/forkEvent";
import PublicEventContainer from "../githubEvents/publicEvent";

const Activity = ({ theme }) => {
  const [events, setEvents] = useState(undefined);

  useEffect(() => {
    const apiUrl = "https://api.github.com/users/UmairJibran/events";

    const fetchEvents = async () => {
      const githubActivityEvents = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const response = await githubActivityEvents.json();
      setEvents(response.splice(0, 14));
    };

    fetchEvents();
  }, []);
  if (!events) return <></>;
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 pt-24 mx-auto" bis_skin_checked="1">
          <div class="-my-8" bis_skin_checked="1">
            {events.map((event, id) => {
              if (event.type === "PushEvent")
                return <PushEventContainer event={event} key={id} />;
              if (event.type === "CreateEvent")
                return <CreateEventContainer event={event} key={id} />;
              if (event.type === "CommitCommentEvent")
                return <CommentEventContainer event={event} key={id} />;
              if (event.type === "PullRequestEvent")
                return <PullRequestEventContainer event={event} key={id} />;
              if (event.type === "IssuesEvent")
                return <IssueEventContainer event={event} key={id} />;
              if (event.type === "ForkEvent")
                return <ForkEventContainer event={event} key={id} />;
              if (event.type === "PublicEvent")
                return <PublicEventContainer event={event} key={id} />;
              return <div key={id}>{event.length}</div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activity;
