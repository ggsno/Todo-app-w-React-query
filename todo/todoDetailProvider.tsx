import { useNavigate } from "react-router-dom";
import { fetchGetTodoById } from "../api/todoAPI";
import checkToken from "../utils/checkToken";

const todoDetailProvider = ({ setSelectedTodo }) => {
  const navigate = useNavigate();
  const handleDetail = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.id;
      checkToken();
      const data = await fetchGetTodoById(localStorage.getItem("token")!, id);
      setSelectedTodo(data);
      navigate({ pathname: "/", search: `?id=${id}` });
    } catch {
      navigate("/login");
    }
  };
  return { handleDetail };
};

export default todoDetailProvider;
