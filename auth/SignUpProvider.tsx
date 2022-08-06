import { FormEvent } from "react";
import { SignUpInput, UserInput } from "../types/users";
import { fetchSignUp } from "../api/authAPI";
import { useNavigate } from "react-router";

const SignUpProvider = ({ email, password }: UserInput) => {
  const navigate = useNavigate();

  const checkValid = ({ email, password, passwordCheck }: SignUpInput) => {
    return (
      /@/.test(email) &&
      /\./.test(email) &&
      8 <= password.length &&
      password === passwordCheck
    );
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (await fetchSignUp({ email, password })) navigate("/");
  };

  return { handleSignup, checkValid };
};
export default SignUpProvider;
