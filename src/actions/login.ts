import { ActionFunction, redirect } from "react-router-dom";
import { setAuthToken } from "../util/localStorage";

export const loginAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  if (!username || !password) {
    return { error: "Empty credentials!" };
  }

  try {
    let response = await initiateLogin(username, password);
    setAuthToken(response);
    return redirect("/");
  } catch {
    return { error: "Invalid credentials!" };
  }
};

async function initiateLogin(
  username: string,
  password: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username !== password) {
        reject("Invalid credentials");
      } else {
        resolve(`${username}#${password}`);
      }
    }, 2000);
  });
}
