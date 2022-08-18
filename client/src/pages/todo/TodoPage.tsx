import React from "react";
import TodoContainer from "../../components/todo/TodoContainer";
import { Link } from "react-router-dom";
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
