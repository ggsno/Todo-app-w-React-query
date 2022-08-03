import { UserInput } from "./users";

export interface ApiProps {
  token: string;
  query: string;
  method: string;
}

export type AuthApi = Pick<ApiProps, "query"> & UserInput;
