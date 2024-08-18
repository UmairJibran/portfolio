import { Popover } from "antd";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font sticky z-50 top-0 bg-white border-b-2 border-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Popover content="Launching Soon">
            <span className="mr-5 cursor-pointer">Blogs</span>
          </Popover>
          <Popover content="Launching Soon">
            <span className="mr-5 cursor-pointer">Case Studies</span>
          </Popover>
        </nav>
        <div className="lg:w-1/5" />
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link
            href="/resume"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Resume
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
