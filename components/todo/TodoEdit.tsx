import { useNavigate } from "react-router-dom";
import checkToken from "../../utils/checkToken";

const TodoEdit = () => {
  const navigate = useNavigate();
  const handleEdit = (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      checkToken();
      // edit
    } catch {
      navigate("/login");
    }
  };
  return { handleEdit };
};

export default TodoEdit;
