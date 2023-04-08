![Github License](https://img.shields.io/badge/License-MIT-brightgreen)

# Google Books API Search

## Project Description

[Google Books API Search](https://lit-citadel-69293.herokuapp.com) is a [MERN full-stack](https://www.geeksforgeeks.org/mern-stack/) web-application. The front-end is displayed using [React.js](https://reactjs.org/) with client-side routing provided by the [react router](https://reactrouter.com/web/guides/quick-start). Server-side routing is performed with [Express.js](https://expressjs.com/). The development environment was provided by [Node.js](https://nodejs.org/en/). And, persistent data is stored in a [MongoDB](https://www.mongodb.com/) database.

Users are taken to the Home Page where they can choose to search the [Google Books API](https://developers.google.com/books) or see books saved in the MongoDB database.

The Search Page provides a text input component that makes a call to the Google Books API and returns book information that is dynamically displayed. There is a "save" button that will add new books to the MongoDB database.

The Saved Page connects to the MongoDB database to pull information on books that have been saved previously and dynamically display them. There is a "remove" button in case duplicate books have been saved, or the user wants to delete a book from the MongoDB database.

## Table of Contents

- [Title](#project-title)
- [Description](#project-description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation-instructions)
- [Usage](#usage)
- [Contributing](#guidelines-for-contributing)
- [Tests](#tests)
- [Technologies](#technologies-used)
- [Author](#author)
- [Questions](#questions)
- [License](#license)

## Installation Instructions

If you want to use this code for yourself please clone/fork the [Google Books API Search repository](https://github.com/etorres-revature/React-Google_Books).

## Usage

The [Google Books API repository](https://github.com/etorres-revature/React-Google_Books) is [deployed on Heroku](https://lit-citadel-69293.herokuapp.com/).

Users start using the [Google Books API Search](https://lit-citadel-69293.herokuapp.com/) on the Home Page.

![GOOGLE BOOKS API SEARCH home page](./screenshots/google-books-home.png)

Navigating to the Search Page displays a text input for Users to type in the names of books that they want to search. Information is conditionally displayed such that when there is nothing to display, Users see that message.

![GOOGLE BOOKS API SEARCH search page](./screenshots/google-books-nosearch.png)

Once a user has entered the name of a book for which to search, then the app displays a card per book dynamically with the information returned from the Google Books API.

![GOOGLE BOOKS API SEARCH search page with search](./screenshots/google-books-search.png)

Each book card has a "save" button that will include that particular book card's information in the MondoDB database.

![GOOGLE BOOKS API SEARCH save alert](./screenshots/google-books-search-save.png)

Navigating to the Saved Page dynamically displays a book card for each book that has been saved into the MongoDB database.

![GOOGLE BOOKS API SEARCH saved page](./screenshots/google-books-saved.png)

If a User discovers for any reason that a book needs to be removed form the MongoDB database (if there is a duplicate, for instance...)

![GOOGLE BOOKS API SEARCH saved page with duplicate](./screenshots/google-books-saved-duplicate.png)

... then the User can click on the "remove" button of the book card associated with the book to be removed; ...

![GOOGLE BOOKS API SEARCH remove alert](./screenshots/google-books-remove.png)

... and, that book's information will be deleted from the MongoDB database and no longer be dynamically displayed on the Saved Page.

![GOOGLE BOOKS API SEARCH no more duplicate on page](./screenshots/google-books-noduplicate.png)

The [Google Books API Search](https://lit-citadel-69293.herokuapp.com/) also has a NoMatch Page. When a User attempts to visit a URI/URL that is not in the client-side router, the following page will be displayed:

![GOOGLE BOOKS API SEARCH nomatch page](./screenshots/google-books-nomatch.png)

## Guidelines for Contributing

If you have thoughts on further features or any suggestions on how to improve [Google Books API Search](https://github.com/etorres-revature/React-Google_Books), please send them to the e-mail address listed below.

## Tests

Test early; test often.

### Technologies Used

### :computer: :computer: :computer: :computer: :computer: :computer:

#### :memo: HTML5 :memo:

**HTML5** is a markup language used for structuring and presenting content on the World Wide Web. The goals are to improve the language with support for the latest multi-media and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices; and to remain backward compatible to older software. Many new symantec features are included.

_HTML5_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/HTML5).</a>

#### :art: CSS :art:

**Cascading Style Sheets (CSS)** is a stylesheet language used for describing the presentation of a document written in a markup language (such as HTML5). CSS is designed to enable the separation of presentation and content; including layout, colors, and fonts. This separation improves content accessibility to provide more flexibility and control in the specification of presentation characteristics, enabling multiple web pages to share formatting by specifying relevant CSS in a separate file, which reduces complexity and repetition in the structural content (HTML), as well as enabling the file to be cached to improve the page load speed between the pages that share the file and its formatting.

Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice, and on Braille-based tactile devices.

_CSS_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).</a>

#### :shoe: Bootstrap 4 :shoe:

**Bootstrap 4** is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

_Bootstrap 4_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/Bootstrap\_(front-end_framework)).</a>

#### :sparkler: JavaScript :sparkler:

**JavaScript (JS)** is one of the core technologies of the World Wide Web (along with HTML and CSS). It enables interactive web pages and is an essential part of web applications. JS is a multi-faceted, scripting language that provides versatility through Application Programming Interfaces (APIs) and Document Object Model (DOM) manipulation, among others.

_JavaScript_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/JavaScript).</a>

#### :globe_with_meridians: NODE.js :globe_with_meridians:

**NODE.js** is an open-source, cross-platform JavaScript runtime environment that execute JavaScript code outside a web browser. NODE.js lets developers use JavaScript to write command line tools and for server-side scripting. NODE.js represents a "Javascript everywhere" paradigm, unifying web-application development around a single programming language, rather than different programming languages for server- and client-side scripts.

_NODE.js_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://en.wikipedia.org/wiki/Node.js).</a>

[Download Node.js](https://nodejs.org/en/).

#### :satellite: Express.js :satellite:

**Express.js** is a minimal and flexible NODE.js web application framework that provides a robust set of features for web and mobile applications. The myriad HTTP utility methods and middleware allow for the creation of a robust API. Express.js provides a thin layer of fundamental features, without obscuring NODE.js features.

_Express.js_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://expressjs.com/).</a>

#### :japanese_ogre: MongoDB :japanese_ogre:

**MongoDB** is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows like traditional databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs that are the basic unit of data and more closely resemble the JSON architecture.

_MongoDB_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://www.guru99.com/what-is-mongodb.html#:~:text=MongoDB%20is%20a%20document%2Doriented,use%20of%20collections%20and%20documents.&text=Collections%20contain%20sets%20of%20documents,equivalent%20of%20relational%20database%20tables).</a>

#### :dizzy: React.js :dizzy:

**React.js** is an open source JavaScript library that is used for building interfaces for single-page applications, which handles the view layer for web and mobile apps. React allows for the creation of reusable UI components. This allows developers to create large web applications that change data, without reloading the page.

_React.js_ content borrowed from <a target="_blank" rel="noopener noreferrer">[this page](https://www.c-sharpcorner.com/article/what-and-why-reactjs/#:~:text=It's%20used%20for%20handling%20the,to%20create%20reusable%20UI%20components.&text=React%20allows%20developers%20to%20create,fast%2C%20scalable%2C%20and%20simple.).</a>

### Author

This _Google Books API Search_ was built by :green_heart: Eric D. Torres :green_heart:

## Questions

Check out my [GitHub profile](https://github.com/etorres-revature).

You can contact me by e-mail at etorresnotary@gmail.com for any additional questions and/ or clarifications you may need about the project.

##### License

[This application uses the **MIT License** found here](./LICENSE).

**[This README.md file generated with my NODE.js README Generator app.](https://github.com/etorres-revature/NODEjs_README.md_Generator)**
