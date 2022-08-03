import React, { useState, useEffect } from "react";
import { getTodos } from "../../api/todoAPI";
import { useNavigate } from "react-router";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();
  const handleAddTodo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  useEffect(() => {
    (async () => {
      try {
        if (!localStorage.getItem("token")) {
          alert("Wrong access. Please log in again.");
          throw Error;
        }
        const data = await getTodos(localStorage.getItem("token")!);
        if (data === null) throw Error;
        setTodo(data);
      } catch {
        navigate("/login");
      }
    })();
  }, [todo]);
  return (
    <>
      <div>
        {todo.length === 0 ? (
          <div>All Tasks Complete !</div>
        ) : (
          todo.map(({ title, content, id, createdAt, updatedAt }) => (
            <div key={id}>
              <div>{title}</div>
              <div>{content}</div>
            </div>
          ))
        )}
        <button onClick={handleAddTodo}>add todo</button>
      </div>
    </>
  );
};

export default Todo;
