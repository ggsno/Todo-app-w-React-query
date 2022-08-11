import React, { FormEvent, useEffect, useState } from "react";
import Input from "../common/Input";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../../api/authAPI";
import useInput from "../../hooks/useInput";
import { AuthInput } from "../../types/auth";

const Login = () => {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);

  const inputEmail = useInput("");
  const inputPassword = useInput("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        await fetchLogin({
          email: inputEmail.value,
          password: inputPassword.value,
        })
      )
        navigate("/");
      else throw Error;
    } catch {
      // fail login ui
    }
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
