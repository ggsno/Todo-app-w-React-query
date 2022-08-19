import React from "react";
import {
  LoginPage,
  SignUpPage,
  LogoutPage,
  NotFoundPage,
  TodoPage,
} from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import path from "./routerPath";
import NotAuthRoute from "./NotAuthRoute";

const Router = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path={path.TODO} element={<TodoPage />} />
          <Route path={path.LOGOUT} element={<LogoutPage />} />
        </Route>
        <Route element={<NotAuthRoute />}>
          <Route path={path.LOGIN} element={<LoginPage />} />
          <Route path={path.SIGNUP} element={<SignUpPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default Router;
