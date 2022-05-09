import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeBookmark } from "../store/modules/books";

export default function Library() {
  // useSelector로 redux를 사용해 만든 글로벌 스테이트를 가져옴
  const { bookmarks } = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();

  const removeHandler = (book) => {
    dispatch(removeBookmark({ book }));
  };

  return (
    <>
      <div className="max-w-xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {bookmarks.map((item, index) => (
            <div className="group relative" key={index}>
              <div className="rounded-md">
                <a href={item.url} target="_BLANK" rel="noreferrer">
                  <img
                    src={item.thumbnail}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    alt={item.title}
                  />
                </a>
              </div>
              <div className="mt-4 font-semibold text-gray-700">
                <h3>{item.title}</h3>
              </div>
              <p>{item.authors}</p>
              <button
                onClick={() => removeHandler(item)}
                className="whitespace-nowrap inline-flex justify-center py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
