const ForkEventContainer = ({ event }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4" bis_skin_checked="1">
      <div className="border border-gray-200 p-6 rounded-lg" bis_skin_checked="1">
        <div
          className="w-10 h-10 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4"
          bis_skin_checked="1"
        >
          <svg
            fill="#6366f1"
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M7,12 L14.5,12 C16.277025,12 17.7447372,10.6756742 17.970024,8.96013518 C16.2885152,8.7047201 15,7.25283448 15,5.5 C15,3.56700338 16.5670034,2 18.5,2 C20.4329966,2 22,3.56700338 22,5.5 C22,7.27155475 20.6838151,8.73569805 18.9759671,8.96790818 C18.7419236,11.2333126 16.8272778,13 14.5,13 L7,13 L7,15.0354444 C8.69614707,15.2780593 10,16.736764 10,18.5 C10,20.4329966 8.43299662,22 6.5,22 C4.56700338,22 3,20.4329966 3,18.5 C3,16.736764 4.30385293,15.2780593 6,15.0354444 L6,8.96455557 C4.30385293,8.72194074 3,7.26323595 3,5.5 C3,3.56700338 4.56700338,2 6.5,2 C8.43299662,2 10,3.56700338 10,5.5 C10,7.26323595 8.69614707,8.72194074 7,8.96455557 L7,12 Z M4,18.5 C4,19.8807119 5.11928813,21 6.5,21 C7.88071187,21 9,19.8807119 9,18.5 C9,17.1192881 7.88071187,16 6.5,16 C5.11928813,16 4,17.1192881 4,18.5 Z M4,5.5 C4,6.88071187 5.11928813,8 6.5,8 C7.88071187,8 9,6.88071187 9,5.5 C9,4.11928813 7.88071187,3 6.5,3 C5.11928813,3 4,4.11928813 4,5.5 Z M18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 Z"></path>{" "}
            </g>
          </svg>
        </div>
        <a href={"https://github.com/" + event.repo.name}>
          <h2 className="text-lg text-gray-200 font-medium title-font mb-2">
            {event.repo.name}
          </h2>
        </a>
        <p className="leading-relaxed text-base">
          {`${
            event.payload?.forkee?.description || "Something helpful!"
          }`.substring(0, 35)}
          ...
        </p>
      </div>
    </div>
  );
};

export default ForkEventContainer;
