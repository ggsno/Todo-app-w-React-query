import { useEffect, useState, FormEvent } from "react";
import useInput from "../hooks/useInput";
import { SignUpInput } from "../types/users";
import { requestSignUp } from "../api/authAPI";
import { useNavigate } from "react-router";

const SignUpProvider = () => {
  const [valid, setValid] = useState(false);
  const email = useInput("");
  const password = useInput("");
  const passwordCheck = useInput("");
  const navigate = useNavigate();

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
    if (await requestSignUp({ email: email.value, password: password.value }))
      navigate("/");
  };

  useEffect(() =>
    setValid(
      validCheck({
        email: email.value,
        password: password.value,
        passwordCheck: passwordCheck.value,
      })
    )
  );

  return { handleSubmit, email, password, passwordCheck, valid };
};
export default SignUpProvider;
