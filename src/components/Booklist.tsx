import { useState } from "react";
import { bookSearch } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setBookmark } from "../store/modules/books";

export interface IBook {
  title: string;
  contents: string;
  url: string;
  thumbnail: string;
  authors: string;
}

export default function Booklist() {
  const [text, setText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    bookSearchHandler();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      bookSearchHandler();
    }
  };

  const bookSearchHandler = async () => {
    const params = {
      query: text,
      sort: "accuracy",
      page: 1,
      size: 50,
    };
    const { data } = await bookSearch(params);
    console.log(data);
    setSearchData(data.documents);
  };

  const bookmarks = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();
  console.log(bookmarks);

  const bookmarkHandler = (book) => {
    dispatch(setBookmark({ book }));
  };

  return (
    <>
      <div className="flex flex-row justify-center">
        <label className="relative block basis-2/4">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-100" viewBox="0 0 20 20">
              ...
            </svg>
          </span>
          <input
            className="mt-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-700 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="책 검색"
            type="text"
            name="search"
            onChange={onChange}
            onKeyPress={handleKeyPress}
            value={text}
          />
        </label>
        <button
          onClick={onSubmit}
          type="submit"
          className="mt-5 py-2 px-8 mx-1 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        >
          검색
        </button>
      </div>
      <main className="max-w-5xl mx-auto">
        {searchData &&
          searchData.map((data: IBook, index) => {
            return (
              <div className="mt-8 flow-root" key={index}>
                <ul className="-my-6 divide-y divide-gray-200">
                  <li className="flex py-6">
                    <div className="h-54 w-34 flex-shrink-0 overflow-hidden border-gray-200">
                      <img
                        className="h-full w-full object-cover object-center"
                        src={data.thumbnail}
                        alt={data.title}
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-bold text-gray-900">
                          <h3>{data.title}</h3>
                          <button
                            className="whitespace-nowrap ml-4 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-gray-500 hover:bg-green-600"
                            onClick={() => bookmarkHandler(data)}
                          >
                            북마크
                          </button>
                        </div>
                        <span>{data.authors}</span>
                        <p className="mt-1 text-medium text-gray-500">
                          {data.contents}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <a href={data.url} target="_BLANK" rel="noreferrer">
                          상세정보
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
      </main>
    </>
  );
}
