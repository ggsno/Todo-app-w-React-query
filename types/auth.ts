import { ChangeEvent, FormEvent } from "react";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

export type UserInput = Pick<User, "email" | "password">;

export type AuthInput = UserInput & { passwordCheck?: string };

export type AuthContextType = {
  valid: boolean;
  handleLogin: (e: FormEvent<HTMLFormElement>) => void;
  handleSignup: (e: FormEvent<HTMLFormElement>) => void;
  inputEmail: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  inputPassword: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  inputPasswordCheck: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};
