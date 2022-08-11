import React, { createContext, ReactNode, useContext } from "react";
import { TodoContextType } from "../types/todo";

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: TodoContextType;
}) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export { TodoProvider, useTodoContext };
