import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../../common/Input";
import useInput from "../../../hooks/useInput";
import useTodo from "../../../services/todo/useTodo";

const Details = () => {
  const { getTodoById, updateTodo } = useTodo();
  const [editMode, setEditMode] = useState(false);
  const [searchParams] = useSearchParams();
  const inputTitle = useInput("");
  const inputContent = useInput("");
  const [id, setId] = useState("");

  const { data, isError } = getTodoById(id);
  // console.log(res.data);
  const selectedTodo = !isError && id !== "" ? data?.data.data : null;

  const handleEditMode = () => {
    setEditMode(true);
    inputTitle.setValue(selectedTodo.title);
    inputContent.setValue(selectedTodo.content);
  };

  const handleEdit = async (e: any) => {
    e.preventDefault();
    console.log(inputTitle.value);
    updateTodo({
      id,
      props: { title: inputTitle.value, content: inputContent.value },
    });
    inputTitle.setValue("");
    inputContent.setValue("");
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    inputTitle.setValue("");
    inputContent.setValue("");
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
          <Input
            id="editTitle"
            labelName="title"
            placeholder={selectedTodo.title}
            {...inputTitle}
          />
          <Input
            id="editContent"
            labelName="content"
            placeholder={selectedTodo.content}
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
