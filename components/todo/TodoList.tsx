import React, { useState, useEffect } from "react";
import { getTodos, getTodoById } from "../../api/todoAPI";
import { useNavigate } from "react-router";
import { Todo as TodoType } from "../../types/todos";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import checkToken from "../../utils/checkToken";
import TodoDelete from "./TodoDelete";

const TodoList = ({ setSelectedTodo, selectedTodo }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { handleDelete } = TodoDelete({
    todos,
    setTodos,
    selectedTodo,
    setSelectedTodo
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleDetail = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.id;
      checkToken();
      const data = await getTodoById(localStorage.getItem("token")!, id);
      setSelectedTodo(data);
      navigate({ pathname: "/", search: `?id=${id}` });
    } catch {
      navigate("/login");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        checkToken();
        const data = await getTodos(localStorage.getItem("token")!);
        if (data === null) throw Error;
        setTodos([...data]);
        if (searchParams.get("id")) {
          const data = await getTodoById(
            localStorage.getItem("token")!,
            searchParams.get("id")!
          );
          setSelectedTodo(data);
          console.log("!!");
        }
      } catch {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <S.Wrapper>
      <h2>Todos</h2>
      {todos.length === 0 ? (
        <p>All Tasks Complete !</p>
      ) : (
        todos.map(({ title, content, id, createdAt, updatedAt }) => (
          <S.Todo key={id}>
            <p id={id} onClick={handleDetail}>
              {title}
            </p>
            <button onClick={handleDelete} value={id}>
              delete
            </button>
          </S.Todo>
        ))
      )}
    </S.Wrapper>
  );
};

export default TodoList;

const S: any = {};

S.Wrapper = styled.section`
  border-right: 1px solid black;
  padding: 30px;
  &:last-child {
    border-right: 0;
  }
`;
