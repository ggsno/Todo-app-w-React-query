import React from "react";
import { Link } from "react-router-dom";
import TodoContainer from "../../components/todo/TodoContainer";
import path from "../../router/routerPath";

const TodoPage = () => {
  return (
    <>
      <TodoContainer />
      <Link to={path.LOGOUT}>Logout</Link>
    </>
  );
};

export { TodoPage };
