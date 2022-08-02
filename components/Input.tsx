import React from "react";
import { ChangeEvent } from "react";

interface inputType {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  id?: string;
  placeholder?: string;
  labelName?: string;
}

const Input = (inputProps: inputType) => {
  const {
    id = inputProps.type,
    placeholder = inputProps.type,
    labelName = inputProps.placeholder || inputProps.type,
    ...props
  } = inputProps;
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input id={id} placeholder={placeholder} {...props} />
    </>
  );
};

export default Input;
