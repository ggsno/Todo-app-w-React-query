export interface Todo {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

export type TodoInput = Pick<Todo, "title" | "content">;

export type TodoContextType = any;
// {
//   todos;
//   setTodos;
//   selectedTodo;
//   setSelectedTodo;
//   newTodoTitle;
//   newTodoContent;
//   handleCreate;
//   handleDelete;
//   handleDetail;
//   handleEdit;
// };
