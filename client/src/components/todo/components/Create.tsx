import React from "react";
import Input from "../../common/Input";
import useInput from "../../../hooks/useInput";
import useTodoQuery from "../../../services/hooks/useTodoQuery";

const Create = () => {
  const { createTodo } = useTodoQuery();

  const inputTitle = useInput("");
  const inputContent = useInput("");

  const handleCreate = async () => {
    if (!inputTitle.value || !inputContent.value) {
      alert("Empty title or content");
      return;
    }
    createTodo({ title: inputTitle.value, content: inputContent.value });
    inputTitle.reset();
    inputContent.reset();
  };

  const handleReset = () => {
    inputTitle.reset();
    inputContent.reset();
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
