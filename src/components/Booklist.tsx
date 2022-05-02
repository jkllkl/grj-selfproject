//import React, { useEffect } from "react";
import { useState } from "react";
import { bookSearch } from "../api";

export interface IBook {
  title: string;
  contents: string;
  url: string;
  thumbnail: string;
}

export default function Booklist() {
  const [text, setText] = useState("");
  const [searchData, setSearchData] = useState([]);
  // const [item, setItem] = useState([]);
  // const [query, setQuery] = useState("");

  // 검색어가 바뀔 때 호출되는 함수
  const onChange = (e: any) => {
    setText(e.target.value);
  };
  // 버튼 클릭 시 실행되는 함수
  const onSubmit = (e: any) => {
    bookSearchHandler();
  };

  const bookSearchHandler = async () => {
    // paramter 설정
    const params = {
      query: text, // 필수 속성 전송에 포함될 data정보
      sort: "accuracy", // 기본값 accuracy(정확도순), recency(최신순)
      page: 1, // 결과 페이지 번호, 1~50 사이의 값, 기본 값 1
      size: 30, // 출력될 문서 갯수 기본값 10
    };
    const { data } = await bookSearch(params); // api 호출
    console.log(data);
    setSearchData(data.documents);
  };

  return (
    <>
      <input
        onChange={onChange}
        className="search"
        type="text"
        value={text}
      ></input>
      <button onClick={onSubmit} type="submit">
        검색
      </button>
      <div>값:{text}</div>
      <main>
        {searchData &&
          searchData.map((data: IBook, index) => {
            return (
              <div key={index}>
                <img src={data.thumbnail} alt={data.title} />
                <span>{data.title}</span>
                <a href={data.url}>상세정보</a>
                <div>{data.contents}</div>
              </div>
            );
          })}
      </main>
    </>
  );
}
