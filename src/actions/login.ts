import { ActionFunction, redirect } from "react-router-dom";
import { setAuthToken } from "../util/localStorage";

export const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (username !== password) {
    return new Response(new Blob(), {
      status: 244,
      statusText: "Invalid credentials",
    });
  }

  setAuthToken(`${username}#${password}`);

  return redirect("/");
};
