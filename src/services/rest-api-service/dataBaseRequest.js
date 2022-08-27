import axios from "axios";
import { useState } from "react";
import { baseURL } from "../httpCommon";

export const getAll = () => {
  return axios.get("/tutorials");
};

export const get = (id) => {
  return axios.get(`/tutorials/${id}`);
};

export const create = (data) => {
  return axios.post("/tutorials", data);
};

export const editCustomerData = (data) => {
  console.log(data);
  axios.post(baseURL + "/customer/edit", {
    userId: data.userId,
    nickname: data.nickname,
    lastName: data.lastName,
    firstName: data.firstName,
    firstNameKana: data.firstNameKana,
    lastNameKana: data.lastNameKana,
    zipCode: data.zipCode,
    prefecture: data.prefecture,
    city: data.city,
    otherAddress: data.otherAddress,
    email: data.email,
    tell: data.tell,
  });
};

export const GetCustomerData = (user) => {
  //auth0のIDを使用。
  const [getData, setGetData] = useState([]);
  axios
    .post(baseURL + "/customer/get", { userId: user.sub })
    .then((response) => {
      console.log(response.data);
      setGetData(response.data);
      // return response.data;
    });
  return getData;
};

export const latestRegisteredProducts = () => {
  return axios
    .get(baseURL + "/item")
    .then((response) => {
      // handle success(axiosの処理が成功した場合に処理させたいことを記述)

      return response.data;
    })
    .catch((error) => {
      // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
      console.error(error);
    });
};

export const GetComment = (itemId) => {
  const [getData, setGetData] = useState([]);

  axios
    .get(baseURL + "/get/comment/" + { itemId })
    .then((response) => {
      // handle success(axiosの処理が成功した場合に処理させたいことを記述)

      setGetData(response.data);
      console.log(setGetData);
    })
    .catch((error) => {
      // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
      console.error(error);
    });
  return getData;
};
