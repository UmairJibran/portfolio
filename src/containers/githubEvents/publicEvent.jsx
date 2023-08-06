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
            viewBox="0 0 32 32"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#6366f1"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <path d="M16.91,28.11a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.42L22.57,20A1,1,0,0,1,24,21.45l-6.36,6.37A1,1,0,0,1,16.91,28.11Zm-5.65-3.83,9.9-9.9a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0l-9.9,9.9a1,1,0,0,0,.71,1.71A1,1,0,0,0,11.26,24.28ZM9.13,16.5l4.25-4.24a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L7.72,15.09a1,1,0,0,0,.71,1.71A1,1,0,0,0,9.13,16.5Zm15.43-3,1.08-1.52,1.87,0a1.09,1.09,0,0,0,.91-.54,1,1,0,0,0-.09-1.06L27.21,8.87l.6-1.77a1,1,0,0,0-1.27-1.27l-1.77.6-1.5-1.12a1,1,0,0,0-1.6.81L21.7,8,20.17,9.07a1,1,0,0,0,.28,1.77l1.79.56.55,1.78a1,1,0,0,0,.8.69h.16A1,1,0,0,0,24.56,13.46ZM23.28,9.32a1,1,0,0,0,.43-.83V8.12l.3.22a1,1,0,0,0,.92.15l.34-.12-.12.35a1,1,0,0,0,.15.92l.22.29h-.37a1,1,0,0,0-.83.42l-.21.3L24,10.3a1,1,0,0,0-.66-.66L23,9.53Zm4.46,9.05L28,18h.43a1,1,0,0,0,.8-1.6L29,16.11l.14-.4a1,1,0,0,0-.24-1,1,1,0,0,0-1-.24l-.39.13-.33-.25A1,1,0,0,0,26,14.24a1,1,0,0,0-.54.91v.41l-.33.24a1,1,0,0,0-.41,1,1,1,0,0,0,.69.8l.39.12.12.4a1,1,0,0,0,.8.69h.16A1,1,0,0,0,27.74,18.37ZM16.35,9.86l.44-.63h.78a1.09,1.09,0,0,0,.9-.55,1,1,0,0,0-.09-1L17.92,7l.25-.73A1,1,0,0,0,16.9,5l-.73.24-.62-.46a1,1,0,0,0-1.06-.09,1,1,0,0,0-.54.91v.77l-.63.45a1,1,0,0,0-.41,1,1,1,0,0,0,.69.8l.74.23.22.74a1,1,0,0,0,.8.69h.16A1,1,0,0,0,16.35,9.86Zm-10,13.72,5-5a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L4.89,22.16a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29A1,1,0,0,0,6.31,23.58Zm4.4,6.13,6-6a1,1,0,0,0-1.42-1.42l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0Z"></path>
            </g>
          </svg>
        </div>
        <a href={"https://github.com/" + event.repo.name}>
          <h2 className="text-lg text-gray-200 font-medium title-font mb-2">
            {event.repo.name}
          </h2>
        </a>
        <p className="leading-relaxed text-base">It's public now!</p>
      </div>
    </div>
  );
};

export default ForkEventContainer;
