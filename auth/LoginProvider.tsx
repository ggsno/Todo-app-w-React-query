import { FormEvent } from "react";
import { UserInput } from "../types/users";
import { fetchLogin } from "../api/authAPI";
import { useNavigate } from "react-router";

const LoginProvider = ({ email, password }: UserInput) => {
  const navigate = useNavigate();

  const checkValid = ({ email, password }: UserInput) => {
    return /@/.test(email) && /\./.test(email) && 8 <= password.length;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      await fetchLogin({
        email,
        password,
      })
    )
      navigate("/");
  };

  return { handleLogin, checkValid };
};

export default LoginProvider;
