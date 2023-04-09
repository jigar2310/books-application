const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    bookId: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: Array,
      required: true,
    },
    description: { type: String },
    image: { type: String },
    link: { type: String },
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
