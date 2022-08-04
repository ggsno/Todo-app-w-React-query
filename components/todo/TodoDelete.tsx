import checkToken from "../../utils/checkToken";
import { deleteTodo } from "../../api/todoAPI";
import { useSearchParams, useNavigate } from "react-router-dom";

const TodoDelete = ({ todos, setTodos, selectedTodo, setSelectedTodo }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleDelete = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      checkToken();
      await deleteTodo(localStorage.getItem("token")!, id);
      setTodos(todos.filter(todo => todo.id !== id));
      if (selectedTodo!.id === id) {
        setSelectedTodo(null);
        setSearchParams({});
      }
    } catch {
      navigate("/login");
    }
  };

  return { handleDelete };
};

export default TodoDelete;
