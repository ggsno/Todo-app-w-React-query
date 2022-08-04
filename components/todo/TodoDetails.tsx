import styled from "styled-components";
import checkToken from "../../utils/checkToken";
import { getTodoById } from "../../api/todoAPI";
import { useNavigate } from "react-router";
import TodoEdit from "./TodoEdit";

const TodoDetail = ({ selectedTodo, setSelectedTodo }) => {
  const navigate = useNavigate();
  const { handleEdit } = TodoEdit();
  const handleDetail = async (e: any) => {
    try {
      e.preventDefault();
      const id = e.target.id;
      checkToken();
      const data = await getTodoById(localStorage.getItem("token")!, id);
      setSelectedTodo(data);
      navigate({ pathname: "/", search: `?id=${id}` });
    } catch {
      navigate("/login");
    }
  };
  return (
    <S.Wrapper>
      <h2>Todo Details</h2>
      {!selectedTodo ? (
        <p>Click Todo To See Details</p>
      ) : (
        <>
          <h3>title</h3>
          <p>{selectedTodo.title}</p>
          <h3>content</h3>
          <p>{selectedTodo.content}</p>
          <h3>created at</h3>
          <p>{selectedTodo.createdAt}</p>
          <h3>updated at</h3>
          <p>{selectedTodo.updatedAt}</p>
          <button onClick={handleEdit} value={selectedTodo.id}>
            edit
          </button>
        </>
      )}
    </S.Wrapper>
  );
};

const S: any = {};

S.Wrapper = styled.section`
  border-right: 1px solid black;
  padding: 30px;
  &:last-child {
    border-right: 0;
  }
`;

export default TodoDetail;
