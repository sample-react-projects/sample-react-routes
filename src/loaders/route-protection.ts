import { redirect } from "react-router-dom";
import { getAuthToken } from "../util/localStorage";

export function routeProtection() {
  if (!getAuthToken()) {
    return redirect("/authenticate/login");
  }

  return null;
}
