import React, { useState, useEffect } from "react";
import {
  fetchDeleteTodo,
  fetchGetTodoById,
  fetchGetTodos
} from "../api/todoAPI";
import { useNavigate } from "react-router";
import { Todo as TodoType } from "../types/todo";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { TodoProvider } from "./useTodoContext";
import { List, Details, Create } from "./components";
import checkToken from "../utils/checkToken";

const Todo = ({ children }: { children: any }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    (async () => {
      try {
        checkToken();
        const newTodo = await fetchGetTodos(localStorage.getItem("token")!);
        if (newTodo === null) throw Error;
        setTodos([...newTodo]);
        if (
          searchParams.get("id") &&
          newTodo.some(({ id }: any) => id === searchParams.get("id"))
        ) {
          const data = await fetchGetTodoById(
            localStorage.getItem("token")!,
            searchParams.get("id")!
          );
          setSelectedTodo(data);
        } else {
          setSearchParams({});
          setSelectedTodo(null);
        }
      } catch {
        navigate("/login");
      }
    })();
  }, [searchParams]);

  return (
    <TodoProvider
      value={{
        todos,
        setTodos,
        selectedTodo,
        setSelectedTodo
      }}
    >
      <h1>Todo App</h1>
      <S.Container>
        {children.map((e: any) => (
          <S.Wrapper>{e}</S.Wrapper>
        ))}
      </S.Container>
      <button onClick={handleLogout}>logout</button>
    </TodoProvider>
  );
};

const S: any = {};

S.Container = styled.article`
  display: flex;
`;

S.Wrapper = styled.section`
  border-right: 1px solid black;
  padding: 30px;
  &:last-child {
    border-right: 0;
  }
`;

Todo.List = List;
Todo.Details = Details;
Todo.Create = Create;

export default Todo;
