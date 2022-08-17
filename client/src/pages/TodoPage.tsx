import React from "react";
import { Link } from "react-router-dom";
import TodoContainer from "../components/todo/TodoContainer";

const TodoPage = () => {
  return (
    <>
      <TodoContainer />
      <Link to={"/logout"}>Logout</Link>
    </>
  );
};

export { TodoPage };
