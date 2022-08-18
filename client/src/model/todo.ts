export interface Todo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoInput = Pick<Todo, "title" | "content">;

const TODO_KEY = "todo";

export const todoCache = {
  getTodos: TODO_KEY,
  getTodoById: (id: string) => TODO_KEY + id,
};
