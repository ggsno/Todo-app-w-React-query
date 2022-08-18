import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchGetTodoById,
  fetchGetTodos,
  fetchUpdateTodo,
} from "../api/todoAPI";

const useTodoQuery = (id?: string) => {
  const queryClient = useQueryClient();
  const { data, ...queryResult } = id
    ? useQuery(["getTodoById", id], () => fetchGetTodoById(id))
    : useQuery(["getTodos"], fetchGetTodos);

  const createTodo = useMutation(fetchCreateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
  }).mutate;

  const updateTodo = useMutation(fetchUpdateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
      queryClient.invalidateQueries(["getTodoById"]);
    },
  }).mutate;

  const deleteTodo = useMutation(fetchDeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
    },
  }).mutate;

  return {
    ...queryResult,
    data: data?.data.data,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodoQuery;
