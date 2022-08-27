export const handleInputText = (e, f) => {
  return {
    type: "HANDLE_INPUT",
    field: f,
    payload: e.currentTarget.value,
  };
};

export const handleInput = (e, f) => {
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

export const setFetchData = (data, f) => {
  return {
    type: "FETCH_DATA",
    field: f,
    payload: data,
    // payload: {
    //   userId: data.userId,
    //   nickname: data.nickname,
    //   zipCode: data.zipCode,
    //   prefecture: data.prefecture,
    //   city: data.city,
    //   otherAddress: data.otherAddress,
    //   email: data.email,
    //   tell: data.tell,
    //   fnameKana: data.fnameKana,
    //   lnameKana: data.lnameKana,
    //   fname: data.fname,
    //   lname: data.lname,
    // },
  };
};
