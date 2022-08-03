import { TodoApi } from "../types/api";

const request = async ({ token, query, method }: TodoApi) => {
  try {
    const response = await fetch(`http://localhost:8080/${query}`, {
      method,
      headers: {
        Authorization: token,
      },
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
  return request({ token, query: "todos", method: "get" });
};

const createTodo = (token: string) => {
  return request({ token, query: "todos", method: "post" });
};

export { getTodos, createTodo };
