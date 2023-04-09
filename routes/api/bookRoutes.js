const router = require("express").Router();
const booksController = require("../../controller/booksController");

router.route("/").get(booksController.readAll);
router.route("/add").post(booksController.create);
router.route("/remove/:id").delete(booksController.delete);

module.exports = router;
