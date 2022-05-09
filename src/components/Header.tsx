import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="bg-neutral-50">
        <div className="py-2 text-3xl font-bold text-gray-900 flex justify-center">
          <h1>독서 기록</h1>
        </div>
        <nav className="bg-neutral-50 space-x-4 py-1 text-3xl font-bold text-gray-900 flex justify-center">
          <li className="flex justify-center">
            <Link
              to="/"
              className="mx-8 text-gray-700 font-bold hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base text-xl"
            >
              책 검색
            </Link>
            <Link
              to="/library"
              className="mx-8 text-gray-700 font-bold hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base text-xl"
            >
              내 서재
            </Link>
          </li>
        </nav>
      </div>
    </>
  );
}
