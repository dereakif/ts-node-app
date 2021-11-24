import { Todo } from "../types";

export const todos: Todo[] = [];

export const validateTodo = (todo: any): boolean => {
  let hasId = typeof todo.id === "number";
  let hasComplete = typeof todo.complete === "boolean";
  let hasText = typeof todo.text === "string";
  const index: number = todos.findIndex((x) => x.id === todo.id);
  let isTodo = hasId && hasComplete && hasText && index === -1 ? true : false;
  return isTodo;
};

export const addTodo = (newTodo: Todo): void => {
  todos.push(newTodo);
};

export const deleteTodo = (todo: Todo): boolean => {
  const index = todos.findIndex((t) => t.id === todo.id);
  let isDeleted = false;
  if (index === -1) {
    throw new Error("Couldn't find the todo to delete");
  }
  todos.splice(index, 1);
  isDeleted = true;
  return isDeleted;
};
