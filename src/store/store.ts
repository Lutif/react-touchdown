import { createStore, combineReducers } from "redux";
import { auth } from "./auth";

const reducers = combineReducers({ auth });
export const store = createStore(reducers);
