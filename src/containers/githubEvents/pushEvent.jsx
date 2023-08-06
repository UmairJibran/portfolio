const PushEventContainer = ({ event }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4" bis_skin_checked="1">
      <div className="border border-gray-200 p-6 rounded-lg" bis_skin_checked="1">
        <div
          className="w-10 h-10 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4"
          bis_skin_checked="1"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <a href={"https://github.com/" + event.repo.name}>
          <h2 className="text-lg text-gray-200 font-medium title-font mb-2">
            {event.repo.name}
          </h2>
        </a>
        <p className="leading-relaxed text-base">
          {`${event.payload?.commits?.at(0)?.message}`.substring(0, 35)}
          ...
        </p>
      </div>
    </div>
  );
};

export default PushEventContainer;
