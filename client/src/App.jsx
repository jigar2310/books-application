import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosGet } from "./utils/api";
import { apiUrls } from "./utils/apiUrlconst";
import { connect, useDispatch } from "react-redux";
import { setSavedBookReult } from "./redux/books/book.action";
import { createStructuredSelector } from "reselect";
import { selectSavedBooks } from "./redux/books/book.selector";
import SearchBook from "./components/SearchBook";
import SavedBooks from "./components/SavedBooks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getSavedBooks();
  }, []);

  function getSavedBooks() {
    axiosGet(apiUrls.getAllBooks).then((books) => {
      dispatch(setSavedBookReult(books.data));
    });
  }

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        style={{ top: "80px" }}
      />
      <Routes>
        <Route path="/" exact element={<SearchBook />} />
        <Route path="/saved-books" exact element={<SavedBooks />} />
      </Routes>
    </div>
  );
}

export default App;
