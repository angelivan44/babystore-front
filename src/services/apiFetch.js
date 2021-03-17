const BASE_URL = "https://babystoreapi.herokuapp.com/";

async function apiFetch(...args){
  const response = await fetch(...args);
  if (!response.ok){
    const error = await response.json();
    console.log(response)
    throw new Error(error.exception);
  }
  if (response.status !== 204){
    return await response.json()
  }
  return response.text;
}

export {apiFetch, BASE_URL}