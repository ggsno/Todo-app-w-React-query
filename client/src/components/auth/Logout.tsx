import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storage from "../../utils/storage";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    storage.remove({ key: "token" });
    navigate("/login");
  });

  return <></>;
};

export default Logout;
