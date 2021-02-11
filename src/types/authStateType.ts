import { UserType } from "./UserType";
export type AuthStateType = {
  user: UserType | null;
  isLoggedIn: boolean;
};
