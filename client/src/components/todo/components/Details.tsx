import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../../common/Input";
import useInput from "../../../hooks/useInput";
import useTodoQuery from "../../../services/hooks/useTodoQuery";

const Details = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");

  const { data: todo, isError, updateTodo } = useTodoQuery(id);

  const selectedTodo = isError || id === "" ? null : todo;

  const inputTitle = useInput("");
  const inputContent = useInput("");

  if (isError) setSearchParams({});

  const handleEditMode = () => {
    setEditMode(true);
    inputTitle.setValue(selectedTodo.title);
    inputContent.setValue(selectedTodo.content);
  };

  const handleEdit = async () => {
    updateTodo({
      id,
      props: { title: inputTitle.value, content: inputContent.value },
    });
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  useEffect(() => {
    setId(searchParams.get("id") || "");
    setEditMode(false);
  }, [searchParams]);

  return (
    <>
      <h2>Todo Details</h2>
      {!selectedTodo ? (
        <p>Click Todo To See Details</p>
      ) : !editMode ? (
        <>
          <h3>title</h3>
          <p>{selectedTodo.title}</p>
          <h3>content</h3>
          <p>{selectedTodo.content}</p>
          <h3>created at</h3>
          <p>{selectedTodo.createdAt}</p>
          <h3>updated at</h3>
          <p>{selectedTodo.updatedAt}</p>
          <button onClick={handleEditMode}>edit</button>
        </>
      ) : (
        <>
          <Input id="editTitle" labelName="title" {...inputTitle} />
          <Input
            id="editContent"
            labelName="content"
            textarea
            {...inputContent}
          />
          <h3>created at</h3>
          <p>{selectedTodo.createdAt}</p>
          <h3>updated at</h3>
          <p>{selectedTodo.updatedAt}</p>
          <button onClick={handleEdit}>ok</button>
          <button onClick={handleCancel}>cancel</button>
        </>
      )}
    </>
  );
};

export { Details };
