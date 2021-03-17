import { apiFetch, BASE_URL } from "./apiFetch";

function ClotheServices() {
  if (!ClotheServices.instance) {
    ClotheServices = this;
  }
  return ClotheServices.instance;
}

ClotheServices.prototype.show = (category_id , clothe_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}/clothes/${clothe_id}`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

  ClotheServices.prototype.index = (category_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}/clothes`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

  ClotheServices.prototype.create = (formData , category_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}/clothes`, {
    method: "POST",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: formData
  });

  ClotheServices.prototype.update = (formData, category_id, clothe_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}/clothes/${clothe_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: formData
  });


  ClotheServices.prototype.delete = (category_id , clothe_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}/clothes/${clothe_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });



export default ClotheServices;