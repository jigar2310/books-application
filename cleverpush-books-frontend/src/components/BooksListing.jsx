import { useEffect, useState } from "react";
import { axiosPost, searchGoogleBooks } from "../utils/api";

export default function BookListing() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [savedBooks, setSavedBooks] =useState([])

  const handleSearch = () => {
    searchGoogleBooks(search).then((data) => {
      const bookData = data?.data?.items.map((book) => ({
        bookId: book.id,
        link: book.volumeInfo.previewLink,
        authors: book.volumeInfo.authors || ["No author to display"],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
      }));
      setBooks(bookData);
    });
  };

  const handleSaveBook = (bookData) => {
    axiosPost("books", bookData).then((data) => {
      console.log(data);
      if (data.status === 201) {
        localStorage.setItem("token", data.data.tokens.access.token);
        setUser(data.data);
        navigate("/");
      }
    });
  };

  return (
    <div>
      <div className='fixed'>
        <div className='flex t-0'>
          <input
            required
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            className='relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            type='button'
            className='group relative flex w-full justify-center rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Search
          </button>
        </div>
      </div>

      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Books</h2>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {books.map((book) => (
            <div key={book.bookId} className='group'>
              {console.log(book)}
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                {book.image && (
                  <img
                    src={book.image}
                    alt={book.title}
                    className='h-full w-full object-cover object-center group-hover:opacity-75'
                  />
                )}
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{book.title}</h3>
              {book.link ? (
                <a
                  href={book.link}
                  className='mt-4 group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Go to google link
                </a>
              ) : (
                "Google Link not available"
              )}
              <button
                onClick={() => handleSaveBook(book)}
                className='mt-4 group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Add To favourite
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
