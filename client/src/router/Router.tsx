import React from "react";
import {
  LoginPage,
  SignUpPage,
  LogoutPage,
  NotFoundPage,
  TodoPage,
} from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import path from "./routerPath";

const Router = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path={path.TODO} element={<PrivateRoute />}>
          <Route path={path.TODO} element={<TodoPage />} />
        </Route>
        <Route path={path.AUTH}>
          <Route path={path.LOGIN} element={<LoginPage />} />
          <Route path={path.SIGNUP} element={<SignUpPage />} />
          <Route path={path.LOGOUT} element={<LogoutPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default Router;
