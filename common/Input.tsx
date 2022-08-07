import React from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface inputType {
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  id?: string;
  placeholder?: string;
  labelName?: string;
  textarea?: boolean;
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
      <S.Label htmlFor={id}>{labelName}</S.Label>
      {inputProps.textarea ? (
        <S.Textarea id={id} placeholder={placeholder} {...props} />
      ) : (
        <S.Input id={id} placeholder={placeholder} {...props} />
      )}
    </>
  );
};

export default Input;

const S: any = {};

S.Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

S.Input = styled.input`
  display: block;
  margin-bottom: 1rem;
`;

S.Textarea = styled.textarea`
  display: block;
  margin-bottom: 1rem;
`;
