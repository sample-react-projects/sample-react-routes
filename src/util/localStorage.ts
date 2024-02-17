export function getAuthToken() {
  return localStorage.getItem("authToken");
}

export function setAuthToken(token: string) {
  return localStorage.setItem("authToken", token);
}
