const PullRequestEventContainer = ({ event }) => {
  return (
    <div className="py-2 flex flex-wrap md:flex-nowrap" bis_skin_checked="1">
      <div
        className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"
        bis_skin_checked="1"
      >
        <a href={"https://github.com/" + event.repo.name}>
          <h2 className="text-lg text-gray-200 font-medium title-font mb-2">
            {event.repo.name}
          </h2>
        </a>

        <span className="mt-1 text-gray-500 text-sm">
          {new Date(event.created_at).toDateString()}
        </span>
      </div>
      <div className="md:flex-grow" bis_skin_checked="1">
        <p className="leading-relaxed">
          {event.payload?.pull_request?.body || "Made it go buzz..."}
        </p>
      </div>
    </div>
  );
};

export default PullRequestEventContainer;
