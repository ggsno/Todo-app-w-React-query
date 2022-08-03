import { UserInput } from "./users";

export interface ApiProps {
  query: string;
  method: string;
}

export type TodoApi = ApiProps & { token: string };
export type AuthApi = Pick<ApiProps, "query"> & UserInput;
