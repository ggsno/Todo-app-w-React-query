import React from "react";
import styled from "styled-components";
import { List, Details, Create } from "./components";

const TodoContainer = () => {
  return (
    <>
      <h1>Todo App</h1>
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
  border-right: 1px solid black;
  padding: 30px;
  &:last-child {
    border-right: 0;
  }
`;

export default TodoContainer;
