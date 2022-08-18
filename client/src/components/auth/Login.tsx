import React, { FormEvent, useEffect, useState } from "react";
import Input from "../common/Input";
import useInput from "../../hooks/useInput";
import { AuthInput } from "../../model/auth";
import useAuthQuery from "../../services/hooks/useAuthQuery";

const Login = () => {
  const [isValid, setIsValid] = useState(false);
  const inputEmail = useInput("");
  const inputPassword = useInput("");
  const { login } = useAuthQuery();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: inputEmail.value,
      password: inputPassword.value,
    });
  };

  const checkValid = ({ email, password }: AuthInput) => {
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
    [inputEmail.value, inputPassword.value]
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
