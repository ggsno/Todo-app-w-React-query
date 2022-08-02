import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import { useState } from "react";

const PageIndex = {
  MAIN: "MAIN",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP"
};

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Login />
      <SignUp />
    </>
  );
}

export default App;
