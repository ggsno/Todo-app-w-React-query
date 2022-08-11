import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchCreateTodo } from "../../../api/todoAPI";
import Input from "../../common/Input";
import useInput from "../../../hooks/useInput";
import checkToken from "../../../utils/checkToken";
import { useTodoContext } from "../../../contexts/useTodoContext";

const Create = () => {
  const inputTitle = useInput("");
  const inputContent = useInput("");
  const { todos, setTodos } = useTodoContext();
  const navigate = useNavigate();

  const handleCreate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      checkToken();
      if (!inputTitle.value || !inputContent.value) {
        alert("Empty title or content");
        return;
      }
      const data = await fetchCreateTodo(
        localStorage.getItem("token")!,
        JSON.stringify({
          title: inputTitle.value,
          content: inputContent.value,
        })
      );
      if (!data) throw Error;
      setTodos([...todos, data]);
      inputTitle.setValue("");
      inputContent.setValue("");
    } catch {
      navigate("/login");
    }
  };

  const handleReset = () => {
    inputTitle.setValue("");
    inputContent.setValue("");
  };

  return (
    <>
      <h2>Create Todo</h2>
      <Input id="newTodoTitle" placeholder="title" {...inputTitle} />
      <Input
        id="newTodoContent"
        placeholder="content"
        textarea
        {...inputContent}
      />
      <button onClick={handleCreate}>ok</button>
      <button onClick={handleReset}>resest</button>
    </>
  );
};

export { Create };
