import checkToken from "../utils/checkToken";
import { fetchCreateTodo } from "../api/todoAPI";
import { useNavigate } from "react-router";

const todoCreateProvider = ({ todos, setTodos, title, content }) => {
  const navigate = useNavigate();
  const handleAddTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      checkToken();
      const data = await fetchCreateTodo(
        localStorage.getItem("token")!,
        JSON.stringify({ title, content })
      );
      setTodos([...todos, data]);
    } catch {
      navigate("/login");
    }
  };

  return { handleAddTodo };
};

export default todoCreateProvider;
