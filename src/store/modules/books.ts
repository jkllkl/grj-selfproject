import { IBook } from "../../components/Booklist";

const SET_BOOKMARK = "books/SET_BOOKMARK";
const REMOVE_BOOKMARK = "books/REMOVE_BOOKMARK";

// 초기 데이터
const initialState: { bookmarks: IBook[] } = {
  bookmarks: [],
};

export function setBookmark({ book }: { book: IBook }) {
  return {
    type: SET_BOOKMARK,
    payload: { book },
  };
}

export function removeBookmark({ book }: { book: IBook }) {
  return {
    type: REMOVE_BOOKMARK,
    payload: { book },
  };
}

export default function books(state = initialState, action: any) {
  switch (action.type) {
    case SET_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload.book],
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks.filter(
            (b) => b.title !== action.payload.book.title
          ),
        ],
      };
    default:
      return state;
  }
}
