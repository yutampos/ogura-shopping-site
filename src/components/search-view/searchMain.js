import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchView from "./searchView";
import SideBar from "./sideBar";

const { Grid } = require("@mui/material");

const SearchMain = () => {
  const Params = useParams();

  const [items, setItems] = useState(null);

  const baseURL = "http://localhost:8080/api";

  const paramSearchValue = Params.groupId + "/" + Params.name;
  console.log(paramSearchValue);

  const searchValue = (psv) => {
    if (psv === "undefined/undefined") {
      return "0/null";
    } else {
      return psv;
    }
  };
  useEffect(() => {
    axios
      .get(baseURL + "/search/" + searchValue(paramSearchValue))
      .then((response) => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        console.log(response);
        console.log(Params);
        console.log(paramSearchValue);
        setItems(response.data);
      })
      .catch((error) => {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.error(error);
      });
  }, [Params]);
  return (
    <Grid>
      <Grid sx={{ width: "100%", ml: { xs: 0, md: 3 } }}>
        <Grid sx={{ m: 4 }}>
          <Box
            sx={{
              pt: 1,
              pb: 1,
              color: "white",
              bgcolor: "error.light",
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>¥</Typography>
            <Typography variant="h6">10,000以上購入</Typography>
            <Typography>で</Typography>
            <Typography variant="h6" fontWeight="bold">
              送料無料！
            </Typography>
          </Box>
        </Grid>
        <Typography
          sx={{ mx: 4, mb: 2 }}
          variant="subtitle1"
          style={{ color: "#787569" }}
        >
          価格やその他の詳細は、商品のサイズや色によって異なる場合があります。
        </Typography>
        <SearchView items={items} />
      </Grid>
    </Grid>
  );
};
export default SearchMain;
