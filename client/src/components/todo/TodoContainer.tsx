import React, { useState, useEffect } from "react";
import { fetchGetTodoById, fetchGetTodos } from "../../api/todoAPI";
import { useNavigate } from "react-router";
import { Todo as TodoType } from "../../types/todo";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { TodoProvider } from "../../contexts/useTodoContext";
import { List, Details, Create } from "./components";
import checkToken from "../../utils/checkToken";

const TodoContainer = ({ children }: { children: any }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

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
        setSelectedTodo,
      }}
    >
      <h1>Todo App</h1>
      <S.Container>
        {children.map((e: any) => (
          <S.Wrapper>{e}</S.Wrapper>
        ))}
      </S.Container>
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

TodoContainer.List = List;
TodoContainer.Details = Details;
TodoContainer.Create = Create;

export default TodoContainer;
