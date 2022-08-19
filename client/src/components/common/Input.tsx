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
  isValid?: boolean;
  invalidMessage?: string;
  className?: string;
}

const Input = (inputProps: inputType) => {
  const {
    id = inputProps.type,
    placeholder = inputProps.type,
    labelName = inputProps.placeholder || inputProps.type,
    isValid,
    invalidMessage,
    className,
    ...props
  } = inputProps;
  return (
    <div className={className}>
      <S.Label htmlFor={id}>{labelName}</S.Label>
      {inputProps.textarea ? (
        <S.Textarea id={id} placeholder={placeholder} {...props} />
      ) : (
        <S.Input id={id} placeholder={placeholder} {...props} />
      )}
      <S.InvalidInputNotice isValid={isValid}>
        {invalidMessage}
      </S.InvalidInputNotice>
    </div>
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
`;

S.Textarea = styled.textarea`
  display: block;
  margin-bottom: 1rem;
`;

S.InvalidInputNotice = styled.p<{ isValid: boolean }>`
  opacity: ${({ isValid }) => (isValid ? 0 : 1)};
  color: red;
  margin: 0;
`;
