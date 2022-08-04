import React, { useState, useEffect } from "react";
import {
  getTodos,
  createTodo,
  deleteTodo,
  getTodoById
} from "../../api/todoAPI";
import { useNavigate, useParams } from "react-router";
import { Todo as TodoType } from "../../types/todos";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTodo, setSelectedTodo] = useState(null);

  const navigate = useNavigate();
  const newTodoTitle = useInput("");
  const newTodoContent = useInput("");
  const handleAddTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      checkToken();
      const data = await createTodo(
        localStorage.getItem("token")!,
        JSON.stringify({
          title: newTodoTitle.value,
          content: newTodoContent.value
        })
      );
      setTodos([...todos, data]);
    } catch {
      navigate("/login");
    }
  };

  const handleDelete = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      checkToken();
      await deleteTodo(localStorage.getItem("token")!, id);
      setTodos(todos.filter(todo => todo.id !== id));
      if (selectedTodo!.id === id) {
        setSelectedTodo(null);
        navigate("/");
      }
    } catch {
      navigate("/login");
    }
  };

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
        if (searchParams.get("id")) {
          const data = await getTodoById(
            localStorage.getItem("token")!,
            searchParams.get("id")!
          );
          setSelectedTodo(data);
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
          <h2>Todo Detail</h2>
          {!selectedTodo ? (
            <p>Click Todo To See Detail</p>
          ) : (
            <>
              <h3>title</h3>
              <p>{selectedTodo.title}</p>
              <h3>content</h3>
              <p>{selectedTodo.content}</p>
              <h3>created at</h3>
              <p>{selectedTodo.createdAt}</p>
              <h3>updated at</h3>
              <p>{selectedTodo.updatedAt}</p>
              <button onClick={handleEdit} value={selectedTodo.id}>
                edit
              </button>
            </>
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
