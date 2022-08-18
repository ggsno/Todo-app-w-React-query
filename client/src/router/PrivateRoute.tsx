import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import storage from "../utils/storage";
import path from "./routerPath";

const PrivateRoute = () => {
  return storage.get({ key: "token" }) ? (
    <Outlet />
  ) : (
    <Navigate to={path.LOGIN} />
  );
};

export default PrivateRoute;
