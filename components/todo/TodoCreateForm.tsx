import React from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import Input from "../common/Input";

const TodoCreateForm = ({ handleCreateTodo }) => {
  const newTodoTitle = useInput("");
  const newTodoContent = useInput("");

  return (
    <S.Wrapper>
      <h2>Add Todo</h2>
      <Input id="newTodoTitle" placeholder="title" {...newTodoTitle} />
      <Input id="newTodoContent" placeholder="content" {...newTodoContent} />
      <button onClick={handleCreateTodo}>add todo</button>
    </S.Wrapper>
  );
};

export default TodoCreateForm;

const S: any = {};

S.Wrapper = styled.section`
  border-right: 1px solid black;
  padding: 30px;
  &:last-child {
    border-right: 0;
  }
`;
