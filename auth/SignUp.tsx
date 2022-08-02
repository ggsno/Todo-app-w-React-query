import { useEffect, useState, FormEvent } from "react";
import useInput from "../hooks/useInput";
import { SignUpInput } from "../types/users";
import Input from "../components/Input";
import { requestSignUp } from "../api/authAPI";

const SignUp = () => {
  const [valid, setValid] = useState(false);
  const email = useInput("");
  const password = useInput("");
  const passwordCheck = useInput("");

  const validCheck = ({ email, password, passwordCheck }: SignUpInput) => {
    return (
      /@/.test(email) &&
      /\./.test(email) &&
      8 <= password.length &&
      password === passwordCheck
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestSignUp({ email: email.value, password: password.value });
  };

  useEffect(() =>
    setValid(
      validCheck({
        email: email.value,
        password: password.value,
        passwordCheck: passwordCheck.value
      })
    )
  );

  return (
    <>
      <h1>Sign Up</h1>
      <form name="login" onSubmit={handleSubmit}>
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
