import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { searchBooksResultFetch } from "../redux/books/book.action";
import { searchGoogleBooks } from "../utils/api";
import { selectSavedBooks } from "../redux/books/book.selector";
import { toast } from "react-toastify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header({ setSearchBooks, savedBooks }) {
  const { pathname } = useLocation();
  const navigation = [
    { name: "Search Books", href: "/", current: pathname === "/" },
    {
      name: "Reading List",
      href: "/saved-books",
      current: pathname === "/saved-books",
    },
  ];

  const [search, setSearch] = useState("");

  // Handling book seach
  const getSearchBook = () => {
    if (search.trim()) {
      searchGoogleBooks(search).then((data) => {
        const bookData = data?.data?.items?.map((book) => ({
          bookId: book?.id,
          link: book.volumeInfo.previewLink,
          authors: book.volumeInfo.authors || ["No author to display"],
          title: book.volumeInfo.title,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks?.thumbnail || "",
        }));
        setSearchBooks(bookData);
      });
    } else {
      toast.error("Search text can not be empty");
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex gap-4">
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && getSearchBook(search)
                    }
                  />
                  <button
                    onClick={() => getSearchBook(search)}
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="div"
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const mapStateToProps = createStructuredSelector({
  savedBooks: selectSavedBooks,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchBooks: (value) => dispatch(searchBooksResultFetch(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
