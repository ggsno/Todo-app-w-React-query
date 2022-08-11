import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/auth/Login";

const LoginPage = () => {
  return (
    <>
      <Login />
      <Link to="/signup">Sign Up</Link>
    </>
  );
};

export { LoginPage };
