import { UserInput } from "../types/users";

const requestLogin = async ({ email, password }: UserInput) => {
  const response = await fetch("http://localhost:8080/users/login", {
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
    return;
  }

  const { message, token } = await response.json();
  alert(message);
  localStorage.setItem("token", token);
};

const requestSignUp = async ({ email, password }: UserInput) => {
  const response = await fetch("http://localhost:8080/users/create", {
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
    return;
  }

  const { message, token } = await response.json();
  alert(message);
  localStorage.setItem("token", token);
};

export { requestLogin, requestSignUp };
