import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import {
  addTodo,
  deleteTodo,
  todos,
  updateTodo,
  validateTodo,
} from "./data/todos";
import { Todo, TodoInput } from "./types";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

app.get("/todos", (req, res) => {
  res.status(201).send(todos);
});

app.put("/todos", (req, res) => {
  const { todoId } = req.body;
  const id = updateTodo(todoId);
  if (id) {
    return res.status(201).send({ id });
  }
  res.status(400).send("Couldn't update the todo");
});

app.delete("/todos", (req, res) => {
  const { todoId } = req.body;
  const id = deleteTodo(todoId);
  if (id) {
    return res.status(201).send({ id });
  }
  res.status(400).send("Couldn't delete the todo");
});

app.post("/todos", (req, res) => {
  const todo: TodoInput = req.body;
  const id = validateTodo(todo);
  if (!id) {
    return res.status(400).send("Bad todo!");
  }
  const newTodo: Todo = { ...todo, id };
  addTodo(newTodo);
  res.status(201).send({ id });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
