import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchGetTodoById,
  fetchGetTodos,
  fetchUpdateTodo,
} from "./todoAPI";

const useTodo = () => {
  const queryClient = useQueryClient();

  const { data, ...queryResult } = useQuery(["getTodos"], fetchGetTodos);

  const getTodoById = (id: string) =>
    useQuery(["getTodoById", id], () => fetchGetTodoById(id));

  const createTodo = useMutation(fetchCreateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
  }).mutate;

  const updateTodo = useMutation(fetchUpdateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
  }).mutate;

  const deleteTodo = useMutation(fetchDeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
  }).mutate;

  return {
    ...queryResult,
    todos: data?.data.data,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodo;
