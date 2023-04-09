import Header from "./Header";
import BooksListing from "./BooksListing";

function SearchBook() {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-2xl lg:mx-0 mb-4 px-4 sm:px-6 pt-4">
        <h2 className="text-xl font-bold tracking-tight text-grey-900 sm:text-3xl">
          Search your favourite books
        </h2>
      </div>
      <BooksListing />
    </div>
  );
}

export default SearchBook;
