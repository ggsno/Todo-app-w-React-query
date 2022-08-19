import React, { FormEvent, useEffect, useRef, useState } from "react";
import useAuthQuery from "../../services/hooks/useAuthQuery";
import useInput from "../../hooks/useInput";
import Input from "../../components/common/Input";
import styled from "styled-components";

const SignUp = () => {
  const { signup } = useAuthQuery();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(true);
  const isFirstRender = useRef(true);
  const inputEmail = useInput("");
  const inputPassword = useInput("");
  const inputPasswordCheck = useInput("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({
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

  const checkValidPasswordCheck = () => {
    const password = inputPassword.value;
    const passwordCheck = inputPasswordCheck.value;
    return password !== "" && password === passwordCheck;
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
    if (isFirstRender.current) return;
    setIsValidPasswordCheck(checkValidPasswordCheck());
  }, [inputPasswordCheck.value]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <>
      <h2>Sign Up</h2>
      <form name="signup" onSubmit={handleSignup}>
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
        <S.Input
          type="password"
          id="passwordCheck"
          placeholder="password check"
          {...inputPasswordCheck}
          isValid={isValidPasswordCheck}
          invalidMessage="비밀번호와 일치하게 입력해주세요"
          required
        />
        <button
          type="submit"
          disabled={
            !inputEmail.value ||
            !inputPassword.value ||
            !inputPasswordCheck.value ||
            !isValidEmail ||
            !isValidPassword ||
            !isValidPasswordCheck
          }
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;

const S: any = {};

S.Input = styled(Input)`
  margin-bottom: 1rem;
`;
