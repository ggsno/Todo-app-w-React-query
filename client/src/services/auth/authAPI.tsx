import { UserInput } from "../../types/auth";
import axios from "axios";
import storage from "../storage";

const instance = axios.create({
  baseURL: "http://localhost:8080/users",
});

instance.interceptors.response.use(
  (res) => {
    const { token } = res.data;
    storage.set({ key: "token", value: token });
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetchLogin = (props: UserInput) => {
  return instance.post("login", props);
};

const fetchSignUp = (props: UserInput) => {
  return instance.post("create", props);
};

export { fetchLogin, fetchSignUp };
