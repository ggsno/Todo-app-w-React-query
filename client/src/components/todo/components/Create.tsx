import React from "react";
import Input from "../../common/Input";
import useInput from "../../../hooks/useInput";
import useTodo from "../../../services/todo/useTodo";

const Create = () => {
  const { createTodo } = useTodo();
  const inputTitle = useInput("");
  const inputContent = useInput("");

  const handleCreate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!inputTitle.value || !inputContent.value) {
      alert("Empty title or content");
      return;
    }
    createTodo({ title: inputTitle.value, content: inputContent.value });
    inputTitle.setValue("");
    inputContent.setValue("");
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
