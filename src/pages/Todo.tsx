import React, { useState, useEffect } from "react";
import { getTodos, deleteTodo, getTodoById } from "../../api/todoAPI";
import { useNavigate } from "react-router";
import { Todo as TodoType } from "../../types/todos";
import Input from "../../components/Input";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import LogoutProvider from "../../auth/LogoutProvider";
import TodoAdd from "../../components/todo/TodoAdd";
import TodoDelete from "../../components/todo/TodoDelete";

const Todo = () => {
  const { handleLogout } = LogoutProvider();
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const navigate = useNavigate();

  const { handleAddTodo, newTodoTitle, newTodoContent } = TodoAdd({
    todos,
    setTodos
  });

  const { handleDelete } = TodoDelete({
    todos,
    setTodos,
    selectedTodo,
    setSelectedTodo
  });

  const handleEdit = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      checkToken();
      // edit
    } catch {
      navigate("/login");
    }
  };

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

  const checkToken = () => {
    if (!localStorage.getItem("token")) {
      alert("Wrong access. Please log in again.");
      throw Error;
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

  useEffect(() => {
    (async () => {
      try {
        checkToken();
        if (
          searchParams.get("id") &&
          todos.some(({ id }) => id === searchParams.get("id"))
        ) {
          const data = await getTodoById(
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
    <>
      <h1>Todo App</h1>
      <S.Container>
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

        <S.Wrapper>
          <h2>Add Todo</h2>
          <Input id="newTodoTitle" placeholder="title" {...newTodoTitle} />
          <Input
            id="newTodoContent"
            placeholder="content"
            {...newTodoContent}
          />
          <button onClick={handleAddTodo}>add todo</button>
        </S.Wrapper>
      </S.Container>
      <button onClick={handleLogout}>logout</button>
    </>
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

S.Todo = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export default Todo;
