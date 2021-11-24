import bodyParser from "body-parser";
import express from "express";
import { addTodo, todos, validateTodo } from "./data/todos";
import { Todo } from "./types";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/todos", (req, res) => {
  const todo: Todo = req.body;
  const isTodo = validateTodo(req.body);
  if (!isTodo) {
    return res.status(400).send("Bad todo!");
  }
  addTodo(todo);
  res.status(201).send(`Todo created! todo length:${todos.length}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
