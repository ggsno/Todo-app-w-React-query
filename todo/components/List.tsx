import React, { useEffect } from "react";
import {
  fetchDeleteTodo,
  fetchGetTodoById,
  fetchGetTodos,
} from "../../api/todoAPI";
import { useNavigate } from "react-router";
import styled from "styled-components";
import checkToken from "../../utils/checkToken";
import { useTodoContext } from "../useTodoContext";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const { todos, setTodos, selectedTodo, setSelectedTodo } = useTodoContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const handleDelete = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      checkToken();
      await fetchDeleteTodo(localStorage.getItem("token")!, id);
      setTodos(todos.filter((todo: any) => todo.id !== id));
      if (selectedTodo && selectedTodo!.id === id) {
        setSelectedTodo(null);
        setSearchParams({});
      }
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };

  const handleDetail = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.id;
      checkToken();
      const data = await fetchGetTodoById(localStorage.getItem("token")!, id);
      setSelectedTodo(data);
      navigate({ pathname: "/", search: `?id=${id}` });
    } catch {
      navigate("/login");
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        checkToken();
        const data = await fetchGetTodos(localStorage.getItem("token")!);
        if (data === null) throw Error;
        setTodos([...data]);
        // infinite loop !!!
        // console.log("render");
      } catch {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <>
      <h2>Todos</h2>
      {todos.length === 0 ? (
        <p>All Tasks Complete !</p>
      ) : (
        todos.map(({ title, id }: any) => (
          <S.Todo key={id}>
            <p id={id} onClick={handleDetail}>
              {title}
            </p>
            <button onClick={handleDelete} value={id}>
              delete
            </button>
          </S.Todo>
        ))
      )}
    </>
  );
};

export { List };

const S: any = {};

S.Todo = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;
