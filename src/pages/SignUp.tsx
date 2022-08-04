import React from "react";
import Input from "../../components/Input";
import SignUpProvider from "../../auth/SignUpProvider";

const SignUp = () => {
  const {
    handleSignup,
    email,
    password,
    passwordCheck,
    valid
  } = SignUpProvider();
  return (
    <>
      <h1>Sign Up</h1>
      <form name="signup" onSubmit={handleSignup}>
        <Input type="email" {...email} required />
        <Input type="password" {...password} required />
        <Input
          type="password"
          id="passwordCheck"
          placeholder="password check"
          {...passwordCheck}
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
