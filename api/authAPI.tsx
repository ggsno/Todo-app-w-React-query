import { UserInput } from "../types/users";

const request = async ({ email, password }: UserInput, query: string) => {
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
      alert(details);
      throw Error(details);
    }

    const { message, token } = await response.json();
    alert(message);

    localStorage.setItem("token", token);

    return true;
  } catch (e) {
    alert(e);
    return false;
  }
};

const requestLogin = (props: UserInput) => {
  return request(props, "login");
};

const requestSignUp = (props: UserInput) => {
  return request(props, "create");
};

export { requestLogin, requestSignUp };
