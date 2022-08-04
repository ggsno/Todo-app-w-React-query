import { useNavigate } from "react-router";

const LogoutProvider = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return { handleLogout };
};

export default LogoutProvider;
