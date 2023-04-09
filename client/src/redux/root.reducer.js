import { combineReducers } from "redux";
import bookReducer from "./books/book.reducer";

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
