import axios from "axios";
import { useEffect, useState } from "react";

export const ZipCodeSearch = (zipCode) => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    axios
      .get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipCode)
      .then((response) => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        console.log(response);
        console.log(zipCode);

        setAddress(response.data);
      })
      .catch((error) => {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.error(error);
      });
  }, [zipCode]);

  return address;
};
