import React from "react";
import Login from "../../components/auth/Login";
import { Link } from "react-router-dom";
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
