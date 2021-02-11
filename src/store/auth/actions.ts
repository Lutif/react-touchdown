import { UserType } from "../../types/UserType";
import { AUTH_SUCCESS, LOGOUT } from "./types";

export const performLogin = (user: UserType) => {
  return {
    payload: user,
    type: AUTH_SUCCESS,
  };
};
export const performLogout = () => {
  return {
    type: LOGOUT,
  };
};
