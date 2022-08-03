import { useEffect, useState, FormEvent } from "react";
import useInput from "../hooks/useInput";
import { UserInput } from "../types/users";
import { requestLogin } from "../api/authAPI";
import { useNavigate } from "react-router";

const LoginProvider = () => {
  const [valid, setValid] = useState(false);
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const validCheck = ({ email, password }: UserInput) => {
    return /@/.test(email) && /\./.test(email) && 8 <= password.length;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (requestLogin({ email: email.value, password: password.value }))
      navigate("/");
  };

  useEffect(() =>
    setValid(validCheck({ email: email.value, password: password.value }))
  );

  return { handleSubmit, email, password, valid };
};

export default LoginProvider;
