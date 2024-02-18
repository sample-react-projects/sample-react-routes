export const AUTH_TOKEN_KEY = "authToken";

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string) {
  return localStorage.setItem(AUTH_TOKEN_KEY, token);
}
