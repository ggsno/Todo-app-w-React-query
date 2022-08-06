import React from "react";
import Todo from "../../todo";

const TodoPage = () => {
  return (
    <>
      <Todo>
        <Todo.List />
        <Todo.Details />
        <Todo.Create />
      </Todo>
    </>
  );
};

export default TodoPage;
