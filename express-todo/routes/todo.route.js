const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const {
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../controllers/todo.controller");
const authenticate = require("../middleware/authenticate.middleware");
const validate = require("../middleware/validate.middleware");
const upload = require("../config/multer");

router.get("/", authenticate, getTodos);
router.get("/:id", authenticate, getTodo);
router.post(
  "/",
  authenticate,
  upload.single("image"),
  body("title").notEmpty(),
  validate,
  createTodo
);
router.delete("/:id", authenticate, deleteTodo);
router.patch("/:id", authenticate, updateTodo);

module.exports = router;
