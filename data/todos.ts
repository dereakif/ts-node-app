import { Todo, TodoInput } from "../types";
import crypto from "crypto";

export const todos: Todo[] = [];

export const validateTodo = (todo: TodoInput): string => {
  let hasComplete = typeof todo.complete === "boolean";
  let hasText = typeof todo.text === "string";
  let id = "";
  if (hasComplete && hasText) {
    id = crypto.randomBytes(16).toString("hex");
  }
  return id;
};

export const addTodo = (newTodo: Todo): void => {
  todos.push(newTodo);
};

export const deleteTodo = (todoId: string): string => {
  const index = todos.findIndex((t) => t.id === todoId);
  let isDeleted = "";
  if (index === -1) {
    throw new Error("Couldn't find the todo to delete");
  }
  todos.splice(index, 1);
  isDeleted = todoId;
  return isDeleted;
};

export const updateTodo = (todoId: string): string => {
  const index = todos.findIndex((t) => t.id === todoId);
  if (index === -1) {
    throw new Error("Couldn't find the todo to update");
  }
  const todo = todos[index];
  todos[index] = { ...todo, complete: !todo.complete };
  return todoId;
};
