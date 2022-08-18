import { UserInput } from "./auth";

export interface ApiProps {
  query: string;
  method: string;
  body?: string;
}

export type TodoApi = ApiProps & { token: string };
export type AuthApi = Pick<ApiProps, "query"> & UserInput;
