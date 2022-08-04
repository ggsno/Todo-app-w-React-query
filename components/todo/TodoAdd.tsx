import checkToken from "../../utils/checkToken";
import { createTodo } from "../../api/todoAPI";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router";

const TodoAdd = ({ todos, setTodos }) => {
  const newTodoTitle = useInput("");
  const newTodoContent = useInput("");
  const navigate = useNavigate();
  const handleAddTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      checkToken();
      const data = await createTodo(
        localStorage.getItem("token")!,
        JSON.stringify({
          title: newTodoTitle.value,
          content: newTodoContent.value
        })
      );
      setTodos([...todos, data]);
    } catch {
      navigate("/login");
    }
  };

  return { handleAddTodo, newTodoTitle, newTodoContent };
};

export default TodoAdd;
