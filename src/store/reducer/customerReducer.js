export const customerState = {
  userId: "",
  nickname: "",
  zipCode: "",
  prefecture: "",
  city: "",
  otherAddress: "",
  email: "",
  tell: "",
  firstNameKana: "",
  lastNameKana: "",
  firstName: "",
  lastName: "",
};

export const customerReducer = (state = customerState, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return { ...state, [action.field]: action.payload };

    case "FETCH_DATA":
      return { ...state, [action.field]: action.payload };

    default:
      return state;
  }
};
