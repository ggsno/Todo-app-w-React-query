import React, { useState, useEffect } from "react";
import { getTodos, createTodo, deleteTodo } from "../../api/todoAPI";
import { useNavigate } from "react-router";
import { Todo as TodoType } from "../../types/todos";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const navigate = useNavigate();
  const newTodoTitle = useInput("");
  const newTodoContent = useInput("");
  const handleAddTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      checkToken();
      const data = await createTodo(
        localStorage.getItem("token")!,
        JSON.stringify({
          title: newTodoTitle.value,
          content: newTodoContent.value
        })
      );
      setTodos([...todos, data]);
    } catch {
      navigate("/login");
    }
  };

  const handleDelete = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      checkToken();
      await deleteTodo(localStorage.getItem("token")!, id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch {
      navigate("/login");
    }
  };

  const checkToken = () => {
    if (!localStorage.getItem("token")) {
      alert("Wrong access. Please log in again.");
      throw Error;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        checkToken();
        const data = await getTodos(localStorage.getItem("token")!);
        if (data === null) throw Error;
        setTodos([...data]);
        console.log(data);
      } catch {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <>
      <div>
        <h2>todos</h2>
        {todos.length === 0 ? (
          <div>All Tasks Complete !</div>
        ) : (
          todos.map(({ title, content, id, createdAt, updatedAt }) => (
            <div key={id} id={id}>
              <div>{title}</div>
              <div>{content}</div>
              <button type="button" onClick={handleDelete} value={id}>
                delete
              </button>
            </div>
          ))
        )}
        <h2>add todo</h2>
        <Input id="newTodoTitle" placeholder="title" {...newTodoTitle} />
        <Input id="newTodoContent" placeholder="content" {...newTodoContent} />
        <button onClick={handleAddTodo}>add todo</button>
      </div>
    </>
  );
};

export default Todo;
