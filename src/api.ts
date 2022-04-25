import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK a5141b58648f8976d1f05e6023273311",
  },
});

// search book api
export const bookSearch = (params: {
  query: any;
  sort: string;
  page: number;
  size: number;
}) => {
  return Kakao.get("/v3/search/book?target=title", { params });
};

// book api
export const book = () => {
  return Kakao.get("/v3/search/book?target=title");
};
