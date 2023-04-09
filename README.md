# Google Books Search

## Project Description

The Search Page provides a text input component that makes a call to the Google Books API and returns book information that is dynamically displayed. There is a "save" button that will add new books to the MongoDB database.

The Saved Page connects to the MongoDB database to pull information on books that have been saved previously and dynamically display them. There is a "remove" button in case duplicate books have been saved, or the user wants to delete a book from the MongoDB database.

## Tech

Google Books Search uses a number of open source projects to work properly:

- [ReactJS] - HTML enhanced for web apps!
- [Tailwind] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [MongoDB] - JSON based database

## Installation

Google Books Search requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/jigar2310/books-application
cd books-application
npm i
cd client
npm i
cd ../
npm run dev
```

For production environments...

```sh
npm install --production
NODE_ENV=production npm run prod
```
