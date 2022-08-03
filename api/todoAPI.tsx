import {ApiProps} from "../types/api";

const request = ({token, query, method}: ApiProps) => {
  try {
    const response = await fetch(`http://localhost:8080/${query}`, {
      method,
      headers: {
        Authorization: token
      }
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
}

const getTodos = async (token: string) => {
  return request(token, "todos");
};

const createTodo = async (token: string) => {
  try {
    
  }
}

export { getTodos };
