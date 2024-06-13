const express = require("express");
const router = express.Router();
const {
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../controllers/todo.controller");
const authenticate = require("../middleware/authenticate.middleware");

router.get(
  "/",
  authenticate,
  getTodos
);
router.get("/:id", authenticate, getTodo);
router.post("/", authenticate, createTodo);
router.delete("/:id", authenticate, deleteTodo);
router.patch("/:id", authenticate, updateTodo);

module.exports = router;