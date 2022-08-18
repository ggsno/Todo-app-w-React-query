export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

export type UserInput = Pick<User, "email" | "password">;

export type AuthInput = UserInput & { passwordCheck?: string };
