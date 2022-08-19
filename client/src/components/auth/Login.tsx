import React, { FormEvent, useEffect, useState } from "react";
import useAuthQuery from "../../services/hooks/useAuthQuery";
import { UserAuthInput } from "../../model/auth";
import useInput from "../../hooks/useInput";
import Input from "../common/Input";

const Login = () => {
  const { login } = useAuthQuery();

  const [isValid, setIsValid] = useState(false);

  const inputEmail = useInput("");
  const inputPassword = useInput("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: inputEmail.value,
      password: inputPassword.value,
    });
  };

  const checkValid = ({ email, password }: UserAuthInput) => {
    return /@/.test(email) && /\./.test(email) && 8 <= password.length;
  };

  useEffect(
    () =>
      setIsValid(
        checkValid({
          email: inputEmail.value,
          password: inputPassword.value,
        })
      ),
    [inputEmail, inputPassword]
  );

  return (
    <>
      <h1>Login</h1>
      <form name="login" onSubmit={handleLogin}>
        <Input type="email" {...inputEmail} required />
        <Input type="password" {...inputPassword} required />
        <button type="submit" disabled={!isValid}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
