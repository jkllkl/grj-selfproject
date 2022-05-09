import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import books from "./modules/books";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["books"],
};

const rootReducer = combineReducers({
  books,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
