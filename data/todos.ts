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
