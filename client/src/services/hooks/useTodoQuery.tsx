import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchGetTodoById,
  fetchGetTodos,
  fetchUpdateTodo,
} from "../api/todoAPI";
import { todoCache } from "../../model/todo";

const useTodoQuery = (id?: string) => {
  const queryClient = useQueryClient();
  const { data, ...queryResult } = id
    ? useQuery([todoCache.getTodoById(id), id], () => fetchGetTodoById(id))
    : useQuery([todoCache.getTodos], fetchGetTodos);

  const createTodo = useMutation(fetchCreateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([todoCache.getTodos]);
    },
  }).mutate;

  const updateTodo = useMutation(fetchUpdateTodo, {
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries([todoCache.getTodos]);
      queryClient.invalidateQueries([todoCache.getTodoById(id)]);
    },
  }).mutate;

  const deleteTodo = useMutation(fetchDeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([todoCache.getTodos]);
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
