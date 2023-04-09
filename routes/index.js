const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./api/bookRoutes");

router.use("/books", bookRoutes);

module.exports = router;
