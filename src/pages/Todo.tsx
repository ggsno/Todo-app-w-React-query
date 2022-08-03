import React, { useState, useEffect, useRef } from "react";
import { getTodos } from "../../api/todoAPI";
import { useNavigate } from "react-router";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const token = useRef(localStorage.getItem("token"));
  const navigate = useNavigate();
  const handleAddTodo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  useEffect(() => {
    (async () => {
      try {
        if (!token.current) {
          alert("Wrong access. Please log in again");
          throw Error;
        }
        const data = await getTodos(token.current!);
        if (data === null) throw Error;
        setTodo(data);
      } catch {
        navigate("/login");
      }
    })();
  });
  return (
    <>
      <div>
        {todo.length === 0 ? (
          <div>All Tasks Complete !</div>
        ) : (
          todo.map(({ title, content, id, createdAt, updatedAt }) => {
            <div key={id}>
              <div>{title}</div>
              <div>{content}</div>
            </div>;
          })
        )}
        <button onClick={handleAddTodo}>add todo</button>
      </div>
    </>
  );
};

export default Todo;
