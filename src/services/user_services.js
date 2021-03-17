import { apiFetch, BASE_URL } from "./apiFetch";

function UserServices() {
  if (!UserServices.instance) {
    UserServices = this;
  }
  return UserServices.instance;
}

UserServices.prototype.show = (user_id) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

  UserServices.prototype.index = (category_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}/clothes`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

  UserServices.prototype.create = (data) =>
  apiFetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...data})
  });

  UserServices.prototype.favorite = (user_id , clothe_id) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({favorit: clothe_id})
  });

  UserServices.prototype.update = (user_id) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: user_id
  });


  UserServices.prototype.delete = (category_id , clothe_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}/clothes/${clothe_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });



export default UserServices;