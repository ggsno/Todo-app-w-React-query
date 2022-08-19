import React, { FormEvent, useEffect, useRef, useState } from "react";
import useAuthQuery from "../../services/hooks/useAuthQuery";
import useInput from "../../hooks/useInput";
import Input from "../common/Input";
import styled from "styled-components";

const Login = () => {
  const { login } = useAuthQuery();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const isFirstRender = useRef(true);
  const inputEmail = useInput("");
  const inputPassword = useInput("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: inputEmail.value,
      password: inputPassword.value,
    });
  };

  const checkValidEmail = () => {
    const email = inputEmail.value;
    return /@/.test(email) && /\./.test(email);
  };

  const checkValidPassword = () => {
    const password = inputPassword.value;
    return 8 <= password.length;
  };

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidEmail(checkValidEmail());
  }, [inputEmail.value]);

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidPassword(checkValidPassword());
  }, [inputPassword.value]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <>
      <h2>Login</h2>
      <form name="login" onSubmit={handleLogin}>
        <S.Input
          type="email"
          {...inputEmail}
          isValid={isValidEmail}
          invalidMessage="@와 .를 포함한 이메일을 입력해주세요"
          required
        />
        <S.Input
          type="password"
          {...inputPassword}
          isValid={isValidPassword}
          invalidMessage="8자 이상의 비밀번호를 입력해주세요"
          required
        />
        <button
          type="submit"
          disabled={
            !inputEmail.value ||
            !inputPassword.value ||
            !isValidEmail ||
            !isValidPassword
          }
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

const S: any = {};

S.Input = styled(Input)`
  margin-bottom: 1rem;
`;
