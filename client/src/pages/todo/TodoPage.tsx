import React from "react";
import TodoContainer from "../../components/todo/TodoContainer";
import CenterContainer from "../../components/layout/centerContainer";
import Header from "../../components/layout/Header";

const TodoPage = () => {
  return (
    <>
      <Header />
      <CenterContainer>
        <TodoContainer />
      </CenterContainer>
    </>
  );
};

export { TodoPage };
