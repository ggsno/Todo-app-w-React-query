import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchGetTodoById } from "../../api/todoAPI";
import checkToken from "../../utils/checkToken";
import { useTodoContext } from "../useTodoContext";

const Details = () => {
  const { selectedTodo, setSelectedTodo } = useTodoContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        checkToken();
        if (searchParams.get("id")) {
          const data = await fetchGetTodoById(
            localStorage.getItem("token")!,
            searchParams.get("id")!
          );
          setSelectedTodo(data);
        }
      } catch {
        navigate("/login");
      }
    })();
  }, [searchParams]);
  return (
    <>
      <h2>Todo Details</h2>
      {!selectedTodo ? (
        <p>Click Todo To See Details</p>
      ) : (
        <>
          <h3>title</h3>
          <p>{selectedTodo.title}</p>
          <h3>content</h3>
          <p>{selectedTodo.content}</p>
          <h3>created at</h3>
          <p>{selectedTodo.createdAt}</p>
          <h3>updated at</h3>
          <p>{selectedTodo.updatedAt}</p>
        </>
      )}
    </>
  );
};

export { Details };
