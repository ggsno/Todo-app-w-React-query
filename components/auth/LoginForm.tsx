import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import LoginProvider from "../../auth/loginProvider";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";

const LoginForm = () => {
  const [valid, setValid] = useState(false);

  const inputEmail = useInput("");
  const inputPassword = useInput("");

  const { handleLogin, checkValid } = LoginProvider({
    email: inputEmail.value,
    password: inputPassword.value,
  });

  useEffect(() =>
    setValid(
      checkValid({ email: inputEmail.value, password: inputPassword.value })
    )
  );
  return (
    <>
      <h1>Login</h1>
      <form name="login" onSubmit={handleLogin}>
        <Input type="email" {...inputEmail} required />
        <Input type="password" {...inputPassword} required />
        <button type="submit" disabled={!valid}>
          Login
        </button>
      </form>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};

export default LoginForm;
