import React from "react";
import Auth from "../../auth";

const LoginPage = () => {
  return (
    <Auth>
      <Auth.Login />
    </Auth>
  );
};

export default LoginPage;
