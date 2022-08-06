import { TodoApi } from "../types/api";

const request = async ({ token, query, method, body }: TodoApi) => {
  try {
    const response = await fetch(`http://localhost:8080/todos${query}`, {
      method,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body,
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

const fetchGetTodos = (token: string) => {
  return request({ token, query: "", method: "GET" });
};

const fetchGetTodoById = (token: string, id: string) => {
  return request({ token, query: `/${id}`, method: "GET" });
};

const fetchCreateTodo = (token: string, body: string) => {
  return request({ token, query: "", method: "POST", body });
};

const fetchUpdateTodo = (token: string, body: string, id: string) => {
  return request({ token, query: `/${id}`, method: "PUT", body });
};

const fetchDeleteTodo = (token: string, id: string) => {
  return request({ token, query: `/${id}`, method: "DELETE" });
};

export {
  fetchGetTodos,
  fetchGetTodoById,
  fetchCreateTodo,
  fetchUpdateTodo,
  fetchDeleteTodo,
};
