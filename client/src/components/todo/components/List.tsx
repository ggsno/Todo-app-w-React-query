import React from "react";
import { useSearchParams } from "react-router-dom";
import useTodoQuery from "../../../services/hooks/useTodoQuery";
import styled from "styled-components";

const List = () => {
  const { data: todos, isLoading, deleteTodo } = useTodoQuery();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleDelete = async (id: string) => {
    deleteTodo(id);
    if (searchParams.get("id") === id) setSearchParams({});
  };

  const handleDetail = async (id: string) => {
    setSearchParams({ id });
  };

  return (
    <>
      <h2>Todo List</h2>
      {isLoading ? null : todos?.length === 0 ? (
        <p>All Tasks Complete !</p>
      ) : (
        todos.map(({ title, id }: { title: string; id: string }) => (
          <S.Todo key={id}>
            <S.Title onClick={() => handleDetail(id)}>{title}</S.Title>
            <button onClick={() => handleDelete(id)}>delete</button>
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
