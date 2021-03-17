import { apiFetch, BASE_URL } from "./apiFetch";

function CategoryServices() {
  if (!CategoryServices.instance) {
    CategoryServices = this;
  }
  return CategoryServices.instance;
}

CategoryServices.prototype.show = (category_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

  CategoryServices.prototype.index = () =>
  apiFetch(`${BASE_URL}/categories`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });

  CategoryServices.prototype.create = (formData) =>
  apiFetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: formData
    
  });

  CategoryServices.prototype.update = (formData , category_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
    body: formData
  });


  CategoryServices.prototype.delete = (category_id) =>
  apiFetch(`${BASE_URL}/categories/${category_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });



export default CategoryServices;