import React from "react";
import { FormEvent, useEffect, useState } from "react";
import { AuthInput } from "../../types/auth";
import { fetchSignUp } from "../../api/authAPI";
import { useNavigate } from "react-router";
import useInput from "../../hooks/useInput";
import Input from "../../components/common/Input";

const SignUp = () => {
  const navigate = useNavigate();

  const [valid, setValid] = useState(false);

  const inputEmail = useInput("");
  const inputPassword = useInput("");
  const inputPasswordCheck = useInput("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        await fetchSignUp({
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

  const checkValid = ({ email, password, passwordCheck }: AuthInput) => {
    return (
      /@/.test(email) &&
      /\./.test(email) &&
      8 <= password.length &&
      (passwordCheck ? password === passwordCheck : true)
    );
  };

  useEffect(
    () =>
      setValid(
        checkValid({
          email: inputEmail.value,
          password: inputPassword.value,
          passwordCheck: inputPasswordCheck.value,
        })
      ),
    [inputEmail.value, inputPassword.value]
  );
  return (
    <>
      <h1>Sign Up</h1>
      <form name="signup" onSubmit={handleSignup}>
        <Input type="email" {...inputEmail} required />
        <Input type="password" {...inputPassword} required />
        <Input
          type="password"
          id="passwordCheck"
          placeholder="password check"
          {...inputPasswordCheck}
          required
        />
        <button type="submit" disabled={!valid}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
