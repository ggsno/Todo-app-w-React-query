import React, { useState, useEffect } from "react";
import { fetchGetTodos } from "../../api/todoAPI";
import { useNavigate } from "react-router";
import { Todo as TodoType } from "../../types/todos";
import styled from "styled-components";
import checkToken from "../../utils/checkToken";

const TodoList = ({ handleDelete, handleDetail }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        checkToken();
        const data = await fetchGetTodos(localStorage.getItem("token")!);
        if (data === null) throw Error;
        setTodos([...data]);
        // if (searchParams.get("id")) {
        //   const data = await fetchGetTodoById(
        //     localStorage.getItem("token")!,
        //     searchParams.get("id")!
        //   );
        //   setSelectedTodo(data);
        // }
      } catch {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <>
      <h2>Todos</h2>
      {todos.length === 0 ? (
        <p>All Tasks Complete !</p>
      ) : (
        todos.map(({ title, id }) => (
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
    </>
  );
};

export default TodoList;

const S: any = {};

S.Todo = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;
