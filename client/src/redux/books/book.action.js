import BookActionTypes from "./book.type";

export const saveBook = (book) => ({
  type: BookActionTypes.ADD_BOOK_TO_SAVE,
  payload: book,
});

export const setSavedBookReult = (book) => ({
  type: BookActionTypes.SET_SAVED_BOOKS_RESULT,
  payload: book,
});

export const searchBooksResultFetch = (book) => ({
  type: BookActionTypes.SET_SEACH_BOOKS_RESULT,
  payload: book,
});

export const deleteSavedBook = (book) => ({
  type: BookActionTypes.DELETE_SAVED_BOOK,
  payload: book,
});
