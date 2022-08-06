import React from "react";
import { FormEvent, useEffect, useState } from "react";
import { AuthInput } from "../types/auth";
import { fetchLogin, fetchSignUp } from "../api/authAPI";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { AuthProvider } from "./useAuthContext";
import { Login, SignUp } from "./components";

const Auth = ({ children }: any) => {
  const navigate = useNavigate();

  const [valid, setValid] = useState(false);

  const inputEmail = useInput("");
  const inputPassword = useInput("");
  const inputPasswordCheck = useInput("");

  const checkValid = ({ email, password, passwordCheck }: AuthInput) => {
    return (
      /@/.test(email) &&
      /\./.test(email) &&
      8 <= password.length &&
      (passwordCheck ? password === passwordCheck : true)
    );
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      await fetchLogin({
        email: inputEmail.value,
        password: inputPassword.value,
      })
    )
      navigate("/");
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      await fetchSignUp({
        email: inputEmail.value,
        password: inputPassword.value,
      })
    )
      navigate("/");
  };

  useEffect(() =>
    setValid(
      checkValid({
        email: inputEmail.value,
        password: inputPassword.value,
        passwordCheck: inputPasswordCheck.value,
      })
    )
  );

  return (
    <AuthProvider
      value={{
        valid,
        handleLogin,
        handleSignup,
        inputEmail,
        inputPassword,
        inputPasswordCheck,
      }}
    >
      {children}
    </AuthProvider>
  );
};

Auth.Login = Login;
Auth.SignUp = SignUp;

export default Auth;
