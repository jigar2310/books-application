const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const compression = require("compression");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const mongodbUrl = process.env.MONGO_URL || "mongodb://localhost/reading-books";
const app = express();

app.use(logger("dev"));
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "client/dist")));
}

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
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
