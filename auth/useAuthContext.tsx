import React, { createContext, ReactNode, useContext } from "react";
import { AuthContextType } from "../types/auth";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: AuthContextType;
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
