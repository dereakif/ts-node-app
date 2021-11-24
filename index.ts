import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { addTodo, deleteTodo, todos, validateTodo } from "./data/todos";
import { Todo } from "./types";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

app.get("/todos", (req, res) => {
  res.status(201).send(todos);
});

app.delete("/todos", (req, res) => {
  const todo: Todo = req.body;
  if (deleteTodo(todo)) {
    res.status(201).send("Todo deleted!");
  }
  res.status(400).send("Couldn't delete the todo");
});

app.post("/todos", (req, res) => {
  const todo: Todo = req.body;
  const isTodo = validateTodo(req.body);
  if (!isTodo) {
    return res.status(400).send("Bad todo!");
  }
  addTodo(todo);
  res.status(201).send(`Todo created! todos length:${todos.length}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
