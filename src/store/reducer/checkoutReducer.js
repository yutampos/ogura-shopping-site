export const checkoutState = {
  f_name: "",
  l_name: "",
  zip_code: "",
  email: "",
  tell: "",
  prefecture: "",
  city: "",
  o_address: "",
  delivery_charge: "",
  payment_method: "",
  pay_convinience_method: "",
  promotion_email: false,
  delivery_method: "",
};

export const checkoutReducer = (state = checkoutState, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "HANDLE_INPUT_PROMO_BOOLEAN":
      const nextBoolean = !state.promotion_email;
      return {
        ...state,
        promotion_email: nextBoolean,
      };
    default:
      return state;
  }
};
