import { UserInput } from "../types/users";
import { AuthApi } from "../types/api";

const request = async ({ email, password, query }: AuthApi) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${query}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
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

const requestLogin = (props: UserInput) => {
  return request({ ...props, query: "login" });
};

const requestSignUp = (props: UserInput) => {
  return request({ ...props, query: "create" });
};

export { requestLogin, requestSignUp };
