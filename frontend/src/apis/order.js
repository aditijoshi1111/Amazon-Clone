export const addInCart = (id, obj) => {
  return fetch(`/orders/create/${id}`, {
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

export const getOrders = () => {
  return fetch(`/orders/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getOrderById = (id) => {
  return fetch(`/orders/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const updateOrder = (id,obj) => {
  return fetch(`/orders/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body:JSON.stringify(obj)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteOrder = (id) => {
  return fetch(`/orders/${id}/`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};