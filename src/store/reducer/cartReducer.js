export const cartState = {
  count: localStorage.getItem(Number)
    ? JSON.parse(localStorage.getItem(Number))
    : [],
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return {
        count: [...state.count, action.payload],
      };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        count: state.count.filter((v) => v.itemId !== action.payload.itemId),
      };
    case "INCREASE_ITEM":
      const itemIndex = state.count.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (itemIndex >= 0) {
        state.count[itemIndex].quantity += 1;
      } else {
      }
      return {
        count: [...state.count],
      };
    case "DECREASE_COUNT":
      const itemIndex2 = state.count.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (itemIndex2 >= 0) {
        state.count[itemIndex2].quantity -= 1;
      } else {
      }
      return {
        count: [...state.count],
      };
    default:
      return state;
  }
};
