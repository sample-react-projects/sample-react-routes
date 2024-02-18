import { redirect } from "react-router-dom";
import { setAuthToken } from "../util/localStorage";

export function logoutAction() {
  setAuthToken("");
  redirect("/authentication/login");
}
