import React from "react";
import Input from "../../common/Input";
import { Link } from "react-router-dom";
import { useAuthContext } from "../useAuthContext";

const Login = () => {
  const { handleLogin, inputEmail, inputPassword, valid } = useAuthContext();

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

export { Login };
