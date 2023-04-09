import BookActionTypes from "./book.type";

const INITIAL_STATE = {
  searchBooks: [],
  savedBooks: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.SET_SEACH_BOOKS_RESULT:
      return { ...state, searchBooks: action.payload };
    case BookActionTypes.SET_SAVED_BOOKS_RESULT:
      return { ...state, savedBooks: action.payload };
    case BookActionTypes.ADD_BOOK_TO_SAVE:
      return { ...state, savedBooks: [...state.savedBooks, action.payload] };
    case BookActionTypes.DELETE_SAVED_BOOK:
      return {
        ...state,
        savedBooks: state.savedBooks.filter(
          (book) => book.bookId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
