export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

export type UserAuthInput = Pick<User, "email" | "password">;

export type SignupInput = UserAuthInput & { passwordCheck: string };
