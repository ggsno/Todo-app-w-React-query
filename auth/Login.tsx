const Login = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    const [email, password] = [e.target[0].value, e.target[1].value];
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

    // 리다이렉팅
  };

  return (
    <>
      <h1>로그인</h1>
      <form name="login" onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <input type="email" placeholder="이메일 입력" required />
        <label htmlFor="password">비밀번호</label>
        <input type="password" placeholder="8자 이상" required />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default Login;
