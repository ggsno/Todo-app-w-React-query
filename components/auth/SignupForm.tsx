import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import SignUpProvider from "../../auth/signUpProvider";
import useInput from "../../hooks/useInput";

const SignUpForm = () => {
  const [valid, setValid] = useState(false);

  const inputEmail = useInput("");
  const inputPassword = useInput("");
  const inputPasswordCheck = useInput("");

  const { handleSignup, checkValid } = SignUpProvider({
    email: inputEmail.value,
    password: inputPassword.value,
  });

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

export default SignUpForm;
