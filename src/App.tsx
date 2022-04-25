import React from "react";
// import "./App.css";
import { useEffect } from "react";
import { bookSearch } from "./api";

const App = (props: any) => {
  useEffect(() => {
    bookSearchHandler();
  }, []);

  // book search 핸들러
  const bookSearchHandler = async () => {
    // paramter 설정
    const params = {
      query: "검색어", // 필수 속성 전송에 포함될 data정보
      sort: "accuracy", // 기본값 accuracy(정확도순), recency(최신순)
      page: 1, // 결과 페이지 번호, 1~50 사이의 값, 기본 값 1
      size: 10, // 출력될 문서 갯수 기본값 10
    };
    const { data } = await bookSearch(params);
    console.log(data);
  };

  return (
    <div className="container">
      <h1>독서 기록</h1>
      <input className="search" type="text" name="query"></input>
      <button type="submit">검색</button>
    </div>
  );
};

export default App;
