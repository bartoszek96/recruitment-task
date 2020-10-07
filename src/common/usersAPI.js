const URL = "https://reqres.in/api/users?page=2";

export const getUsers = () => {
  return fetch(URL)
    .then(response => response.json())
    .then(json => json);
}
