export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const addCartItem = (item) => {
  return {
    type: "ADD_CART_ITEM",
    payload: {
      itemId: item.itemId,
      name: item.name,
      description: item.description,
      price: item.price,
      url: item.url,
      quantity: 1,
    },
  };
};

export const increaseItem = (item) => {
  return {
    type: "INCREASE_ITEM",
    payload: {
      itemId: item.itemId,
    },
  };
};

export const decreaseItem = (item) => {
  return {
    type: "DECREASE_COUNT",
    payload: {
      itemId: item.itemId,
    },
  };
};

export const removeCartItem = (item) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: {
      itemId: item.itemId,
    },
  };
};
