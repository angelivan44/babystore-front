import { apiFetch, BASE_URL } from "./apiFetch";

export const login = (mail, password) =>
  apiFetch(`${BASE_URL}/login`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({mail, password})
});

export const logout = () =>
apiFetch(`${BASE_URL}/logout`,{
  method: "DELETE",
  headers: {
    Authorization: `Token token=${sessionStorage.getItem("token")}`
  },
});