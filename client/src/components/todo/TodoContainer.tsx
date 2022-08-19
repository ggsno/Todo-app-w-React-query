import React from "react";
import { List, Details, Create } from "./components";
import styled from "styled-components";

const TodoContainer = () => {
  return (
    <>
      <h2>Todo App</h2>
      <S.Container>
        <S.Wrapper>
          <List />
        </S.Wrapper>
        <S.Wrapper>
          <Details />
        </S.Wrapper>
        <S.Wrapper>
          <Create />
        </S.Wrapper>
      </S.Container>
    </>
  );
};

const S: any = {};

S.Container = styled.article`
  display: flex;
`;

S.Wrapper = styled.section`
  width: 12rem;
  overflow-wrap: break-word;
  border-right: 1px solid black;
  padding: 30px;
  &:last-child {
    border-right: 0;
  }
`;

export default TodoContainer;
