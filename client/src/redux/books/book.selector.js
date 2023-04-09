import { createSelector } from "reselect";

const selectBooks = (state) => state.books;

export const selectSearchedBooks = createSelector(
  [selectBooks],
  (books) => books.searchBooks
);

export const selectSavedBooks = createSelector(
  [selectBooks],
  (currecy) => currecy.savedBooks
);
