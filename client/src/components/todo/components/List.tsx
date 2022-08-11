import React from "react";
import { fetchDeleteTodo, fetchGetTodoById } from "../../../api/todoAPI";
import { useNavigate } from "react-router";
import styled from "styled-components";
import checkToken from "../../../utils/checkToken";
import { useTodoContext } from "../../../contexts/useTodoContext";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const { todos, setTodos, selectedTodo, setSelectedTodo } = useTodoContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleDelete = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      checkToken();
      await fetchDeleteTodo(localStorage.getItem("token")!, id);
      setTodos(todos.filter((todo: any) => todo.id !== id));
      if (selectedTodo && selectedTodo!.id === id) {
        setSelectedTodo(null);
        setSearchParams({});
      }
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };

  const handleDetail = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.id;
      checkToken();
      const data = await fetchGetTodoById(localStorage.getItem("token")!, id);
      setSelectedTodo(data);
      navigate({ pathname: "/", search: `?id=${id}` });
    } catch {
      navigate("/login");
    }
  };

  return (
    <>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>All Tasks Complete !</p>
      ) : (
        todos.map(({ title, id }: any) => (
          <S.Todo key={id}>
            <S.Title id={id} onClick={handleDetail}>
              {title}
            </S.Title>
            <button onClick={handleDelete} value={id}>
              delete
            </button>
          </S.Todo>
        ))
      )}
    </>
  );
};

export { List };

const S: any = {};

S.Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

S.Title = styled.p`
  width: 8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
