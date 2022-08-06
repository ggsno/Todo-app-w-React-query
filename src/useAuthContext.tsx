import React from "react";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === null)
    throw new Error("useAuthContext must be used within a AuthProvider");
  return context;
};

export { AuthContext, useAuthContext };
