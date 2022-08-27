export const handleInputText = (e, f) => {
  return {
    type: "HANDLE_INPUT",
    field: f,
    payload: e.currentTarget.value,
  };
};

export const handleInputNum = (e, f) => {
  return {
    type: "HANDLE_INPUT",
    field: f,
    payload: e,
  };
};

export const handleInputMenu = (e, f) => {
  return {
    type: "HANDLE_INPUT",
    field: f,
    payload: e.target.value,
  };
};

export const handleInputPromoBoolean = () => {
  return {
    type: "HANDLE_INPUT_PROMO_BOOLEAN",
  };
};

export const handleInputZipCodeApi = (data, f) => {
  return {
    type: "HANDLE_INPUT",
    field: f,
    payload: data,
  };
};
