import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchLogin, fetchSignUp } from "./authAPI";

const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation(fetchLogin, {
    onSuccess: () => {
      navigate("/");
    },
  }).mutate;

  const signup = useMutation(fetchSignUp, {
    onSuccess: () => {
      navigate("/");
    },
  }).mutate;

  return { login, signup };
};

export default useAuth;
