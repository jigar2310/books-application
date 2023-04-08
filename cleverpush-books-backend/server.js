const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const compression = require("compression");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger("dev"));
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose
  .connect("mongodb://127.0.0.1:27017/googlebooksdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connected ");
  })
  .catch((error) => {
    console.log("Error while connecting mongo ::: ", error);
  });

app.listen(PORT, () => {
  console.log(`App is active at http://localhost:${PORT}`);
});
