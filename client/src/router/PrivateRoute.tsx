import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import storage from "../utils/storage";

const PrivateRoute = () => {
  return storage.get({ key: "token" }) ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRoute;
