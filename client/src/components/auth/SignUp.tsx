import React, { FormEvent, useEffect, useState } from "react";
import useAuthQuery from "../../services/hooks/useAuthQuery";
import { SignupInput } from "../../model/auth";
import useInput from "../../hooks/useInput";
import Input from "../../components/common/Input";

const SignUp = () => {
  const { signup } = useAuthQuery();

  const [isValid, setIsValid] = useState(false);

  const inputEmail = useInput("");
  const inputPassword = useInput("");
  const inputPasswordCheck = useInput("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({
      email: inputEmail.value,
      password: inputPassword.value,
    });
  };

  const checkValid = ({ email, password, passwordCheck }: SignupInput) => {
    return (
      /@/.test(email) &&
      /\./.test(email) &&
      8 <= password.length &&
      password === passwordCheck
    );
  };

  useEffect(
    () =>
      setIsValid(
        checkValid({
          email: inputEmail.value,
          password: inputPassword.value,
          passwordCheck: inputPasswordCheck.value,
        })
      ),
    [inputEmail, inputPassword, inputPasswordCheck]
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
        <button type="submit" disabled={!isValid}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
