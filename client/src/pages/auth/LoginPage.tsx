import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/auth/Login";
import path from "../../router/routerPath";

const LoginPage = () => {
  return (
    <>
      <Login />
      <Link to={path.SIGNUP}>Sign Up</Link>
    </>
  );
};

export { LoginPage };
