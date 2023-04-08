import React, { Suspense, useState } from "react";
import "./App.css";
import BookListing from "./components/BooksListing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const loading = (
    <div className='pt-3 text-center'>
      <div className='sk-spinner sk-spinner-pulse'></div>
    </div>
  );

  return (
    <div className='App'>
      <ToastContainer position="top-right" autoClose={5000} style={{ top: '80px' }} />
      <Suspense fallback={loading}>
        <Router>
          <Routes>
             <Route path='/' name='' element={<BookListing />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
