import { useEffect, useState, FormEvent } from "react";
import useInput from "../hooks/useInput";
import { UserInput } from "../types/users";
import Input from "../components/Input";
import { requestLogin } from "../api/authAPI";

const Login = () => {
  const [valid, setValid] = useState(false);
  const email = useInput("");
  const password = useInput("");

  const validCheck = ({ email, password }: UserInput) => {
    return /@/.test(email) && /\./.test(email) && 8 <= password.length;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestLogin({ email: email.value, password: password.value });
  };

  useEffect(() =>
    setValid(validCheck({ email: email.value, password: password.value }))
  );

  return (
    <>
      <h1>Login</h1>
      <form name="login" onSubmit={handleSubmit}>
        <Input type="email" {...email} required />
        <Input type="password" {...password} required />
        <button type="submit" disabled={!valid}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
