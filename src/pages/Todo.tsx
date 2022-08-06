import React, { useState, useEffect } from "react";
import { fetchGetTodos, fetchGetTodoById } from "../../api/todoAPI";
import { useNavigate } from "react-router";
import { Todo as TodoType } from "../../types/todos";
import Input from "../../components/common/Input";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import LogoutProvider from "../../auth/logoutProvider";
import todoDetailProvider from "../../todo/todoDetailProvider";
import TodoList from "../../components/todo/TodoList";
import TodoDetails from "../../components/todo/TodoDetails";
import TodoCreateForm from "../../components/todo/TodoCreateForm";

const Todo = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { handleLogout } = LogoutProvider();
  const { handleDetail } = todoDetailProvider({ setSelectedTodo });
  const { handleCreateTodo } = todoCreateProvider()
  const { handleDelete } = todoDeleteProvider();

  return (
    <>
      <h1>Todo App</h1>
      <S.Container>
        <S.Wrapper>
          <TodoList handleDetail={handleDetail} handleDelete={handleDelete} />
        </S.Wrapper>
        <S.Wrapper>
          <TodoDetails selectedTodo={selectedTodo} />
        </S.Wrapper>
        <S.Wrapper>
          <TodoCreateForm />
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

export default Todo;
