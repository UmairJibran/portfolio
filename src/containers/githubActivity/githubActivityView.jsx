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
      setEvents(response);
    };

    fetchEvents();
  });
  if (!events) return <></>;
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 pt-24 mx-auto" bis_skin_checked="1">
          <div
            className="flex flex-wrap w-full mb-10 flex-col items-center text-center"
            bis_skin_checked="1"
          >
            <h1 className="sm:text-3xl text-2xl font-black text-white">
              Last 30 Day Open Source Contributions
            </h1>
          </div>
          <div className="flex flex-wrap -m-4" bis_skin_checked="1">
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
              return <div key={id}></div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activity;
