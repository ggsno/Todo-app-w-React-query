import { TodoApi } from "../types/api";

const request = async ({ token, query, method, body }: TodoApi) => {
  try {
    const response = await fetch(`http://localhost:8080/todos${query}`, {
      method,
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      },
      body
    });

    if (!response.ok) {
      const { detail } = await response.json();
      throw Error(detail);
    }

    const { data } = await response.json();

    return data;
  } catch (e) {
    alert(e);
    return null;
  }
};

const getTodos = (token: string) => {
  return request({ token, query: "", method: "GET" });
};

const getTodoById = (token: string, id: string) => {
  return request({ token, query: `/${id}`, method: "GET" });
};

const createTodo = (token: string, body: string) => {
  return request({ token, query: "", method: "POST", body });
};

const updateTodo = (token: string, body: string, id: string) => {
  return request({ token, query: `/${id}`, method: "PUT", body });
};

const deleteTodo = (token: string, id: string) => {
  return request({ token, query: `/${id}`, method: "DELETE" });
};

export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };
