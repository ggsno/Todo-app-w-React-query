import { UserInput } from "../types/auth";
import { AuthApi } from "../types/api";

const commonRequest = async ({ email, password, query }: AuthApi) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${query}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const { details } = await response.json();
      throw Error(details);
    }

    const { message, token } = await response.json();
    localStorage.setItem("token", token);
    alert(message);

    return true;
  } catch (e) {
    alert(e);
    return false;
  }
};

const fetchLogin = (props: UserInput) => {
  return commonRequest({ ...props, query: "login" });
};

const fetchSignUp = (props: UserInput) => {
  return commonRequest({ ...props, query: "create" });
};

export { fetchLogin, fetchSignUp };
