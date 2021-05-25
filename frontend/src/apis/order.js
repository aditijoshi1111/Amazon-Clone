let API = "http://localhost:8000/api/";
export const addInCart = (id,obj) => {
  return fetch(`${API}/orders/create/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
