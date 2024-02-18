import { ActionFunction, redirect } from "react-router-dom";
import { setAuthToken } from "../util/localStorage";

export const logoutAction: ActionFunction<void> = () => {
  setAuthToken("");
  return redirect("/authenticate/login");
};
