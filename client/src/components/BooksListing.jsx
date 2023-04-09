import React from "react";
import { createStructuredSelector } from "reselect";
import { deleteSavedBook, saveBook } from "../redux/books/book.action";
import {
  selectSavedBooks,
  selectSearchedBooks,
} from "../redux/books/book.selector";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { axiosDelete, axiosPost } from "../utils/api";
import { apiUrls } from "../utils/apiUrlconst";
import { toast } from "react-toastify";

function BooksListing({
  searchedBooks,
  savedBooks,
  saveBook,
  deleteSavedBook,
}) {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const books = isHomePage ? searchedBooks : savedBooks;

  const handleDeleteBook = (bookData) => {
    deleteSavedBook(bookData.bookId);
    axiosDelete(apiUrls.removeBook + bookData.bookId).then((data) => {
      if (data.status === 200) {
        toast.success(`${bookData.title} removed from reading list`);
      }
    });
  };

  const handleSaveBook = (bookData) => {
    axiosPost(apiUrls.saveBook, bookData).then((data) => {
      if (data.status === 200) {
        saveBook(bookData);
        toast.success(`${bookData.title} added to reading list`);
      }
    });
  };

  const savedBookIds = savedBooks.map((book) => {
    return book.bookId;
  });

  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {books?.map((book) => {
          return (
            <div key={book.bookId} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={book.image}
                  alt={book.title}
                  onError={(e) => (e.target.src = "/images/bookCover.jpg")}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                Title : {book.title}
              </h3>
              <h3 className="mt-4 text-sm text-gray-700">
                Authors : {book.authors.toString()}
              </h3>
              {book.link ? (
                <a
                  href={book.link}
                  className="mt-4 group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go to google link
                </a>
              ) : (
                "Google Link not available"
              )}
              <button
                onClick={() =>
                  !savedBookIds.includes(book.bookId)
                    ? handleSaveBook(book)
                    : handleDeleteBook(book)
                }
                className="mt-4 group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {!savedBookIds.includes(book.bookId)
                  ? "Add to reading list"
                  : "Delete from reading list"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  savedBooks: selectSavedBooks,
  searchedBooks: selectSearchedBooks,
});

const mapDispatchToProps = (dispatch) => ({
  deleteSavedBook: (value) => dispatch(deleteSavedBook(value)),
  saveBook: (value) => dispatch(saveBook(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksListing);
