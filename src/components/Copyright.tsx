import Link from "next/link";

// DO NOT REMOVE THIS
export default function Copyright() {
  return (
    <>
      <div className="w-full flex justify-center">
        The source code is
        <Link
          href="https://github.com/umairjibran/portfolio.git"
          className="custom-underline ml-2"
          target="_blank"
        >
          available on GitHub
        </Link>
      </div>
      <div className="full bg-slate-100 text-center py-1">
        &copy; 2024 All rights reserved. Made with 🖤 by{" "}
        <Link href="https://www.umairjibran.com" className="text-blue-900">
          Umair Jibran
        </Link>
        .
      </div>
    </>
  );
}
