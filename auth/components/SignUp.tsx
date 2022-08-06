import React from "react";
import Input from "../../common/Input";
import { useAuthContext } from "../useAuthContext";

const SignUp = () => {
  const { handleSignup, inputEmail, inputPassword, inputPasswordCheck, valid } =
    useAuthContext();

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

export { SignUp };
