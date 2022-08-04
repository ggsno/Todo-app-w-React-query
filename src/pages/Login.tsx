import React from "react";
import Input from "../../components/Input";
import LoginProvider from "../../auth/LoginProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleLogin, email, password, valid } = LoginProvider();

  return (
    <>
      <h1>Login</h1>
      <form name="login" onSubmit={handleLogin}>
        <Input type="email" {...email} required />
        <Input type="password" {...password} required />
        <button type="submit" disabled={!valid}>
          Login
        </button>
      </form>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};

export default Login;
