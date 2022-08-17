import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useTodo from "../../../services/todo/useTodo";

const List = () => {
  const { todos, isLoading, deleteTodo } = useTodo();
  const [, setSearchParams] = useSearchParams();

  const handleDelete = async (e: any) => {
    e.preventDefault();
    const id = e.target.value;
    deleteTodo(id);
    setSearchParams({});
  };

  const handleDetail = async (e: any) => {
    e.preventDefault();
    const id = e.target.id;
    setSearchParams({ id });
  };

  return (
    <>
      <h2>Todo List</h2>
      {isLoading ? null : todos?.length === 0 ? (
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
