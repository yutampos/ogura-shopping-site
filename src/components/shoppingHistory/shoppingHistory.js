import { useAuth0 } from "@auth0/auth0-react";

import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { getOrderHistory } from "../../services/rest-api-service/dataBaseRequest";
import HistoryCard from "./historyCard";

export default function ShoppingHistry() {
  const { user, isAuthenticated } = useAuth0();
  const [data, setData] = useState([]);

  const baseURL = "http://localhost:8080/api";

  useEffect(() => {
    if (isAuthenticated === true) {
      axios
        .post(baseURL + "/order-history/get", { userId: user.sub })
        .then((response) => {
          // handle success(axiosの処理が成功した場合に処理させたいことを記述)
          console.log(response);
          setData(response.data);
        })
        .catch((error) => {
          // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.error(error);
        });
    } else {
    }
  }, []);
  // console.log(data);

  return (
    <Grid container style={{ backgroundColor: "#f8f8f8" }}>
      <Grid item md={1} xl={2}></Grid>
      <Grid item xs={12} md={10} xl={8}>
        <Typography
          sx={{ m: 2, fontSize: { xs: "20px", md: "30px" } }}
          variant="h4"
        >
          注文履歴
        </Typography>
        {data.length !== 0 ? (
          <HistoryCard data={data} />
        ) : (
          <Typography>注文履歴がありません。</Typography>
        )}
      </Grid>
      <Grid item md={1} xl={2}></Grid>
    </Grid>
  );
}
