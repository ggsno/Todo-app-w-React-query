import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import path from "../../router/routerPath";
import { fetchLogin, fetchSignUp } from "../api/authAPI";

const useAuthQuery = () => {
  const navigate = useNavigate();

  const login = useMutation(fetchLogin, {
    onSuccess: () => {
      navigate(path.TODO);
    },
    onError: (error) => {
      if (error instanceof AxiosError) alert(error.response?.data.details);
    },
  }).mutate;

  const signup = useMutation(fetchSignUp, {
    onSuccess: () => {
      navigate(path.TODO);
    },
    onError: (error) => {
      if (error instanceof AxiosError) alert(error.response?.data.details);
    },
  }).mutate;

  return { login, signup };
};

export default useAuthQuery;
