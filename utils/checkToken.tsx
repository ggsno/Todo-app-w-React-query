const checkToken = () => {
  if (!localStorage.getItem("token")) {
    alert("Wrong access. Please log in again.");
    throw Error;
  }
};

export default checkToken;
