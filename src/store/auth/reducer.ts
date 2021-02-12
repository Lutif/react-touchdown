import { AuthStateType } from "../../types/";
import { AUTH_SUCCESS, LOGOUT } from "./types";

const initialState: AuthStateType = {
  user: null,
  isLoggedIn: false,
};

type ActionType = {
  payload: unknown;
  type: "AUTH_SUCCESS" | "LOGOUT";
};
export const auth = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
};
