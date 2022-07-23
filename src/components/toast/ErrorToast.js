const ErrorToast = ({ title, subTitle, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <div className="flex items-center justify-center w-12 bg-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-red-500 dark:text-red-400">
            {title}
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-200">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};
export default ErrorToast;
