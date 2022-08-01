import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";

const Login = () => {
  const [valid, setValid] = useState(false);
  const email = useInput("");
  const password = useInput("");

  const validCheck = (email, passwrd) => {
    return /@/.test(email) && /\./.test(email) && 8 <= passwrd.length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [email, password] = [e.target[0].value, e.target[1].value];

    if (!validCheck(email, password)) {
      alert("잘못된 양식");
      return;
    }

    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const { details } = await response.json();
      alert(details);
      return;
    }
    const { message, token } = await response.json();
    alert(message);
    localStorage.setItem("token", token);

    // 리다이렉팅
  };

  useEffect(() => setValid(validCheck(email.value, password.value)));

  return (
    <>
      <h1>로그인</h1>
      <form name="login" onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <input type="email" placeholder="이메일 입력" {...email} required />
        <label htmlFor="password">비밀번호</label>
        <input type="password" placeholder="8자 이상" {...password} required />
        <button type="submit" disabled={!valid}>
          로그인
        </button>
      </form>
    </>
  );
};

export default Login;
