import axios from "axios";
import storage from "../../utils/storage";
import { TodoInput } from "../model/todo";

const instance = axios.create({
  baseURL: "http://localhost:8080/todos",
});

instance.interceptors.request.use(
  (config) => {
    const token = storage.get({ key: "token" });
    if (!token) throw Error("no token");
    return { ...config, headers: { Authorization: token } };
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetchGetTodos = () => {
  return instance.get("");
};

const fetchGetTodoById = (id: string) => {
  return instance.get(id);
};

const fetchCreateTodo = (props: TodoInput) => {
  return instance.post("", props);
};

const fetchUpdateTodo = ({ id, props }: { id: string; props: TodoInput }) => {
  return instance.put(id, props);
};

const fetchDeleteTodo = (id: string) => {
  return instance.delete(id);
};

export {
  fetchGetTodos,
  fetchGetTodoById,
  fetchCreateTodo,
  fetchUpdateTodo,
  fetchDeleteTodo,
};
