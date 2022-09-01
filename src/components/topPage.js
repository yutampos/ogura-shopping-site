import Box from "@mui/material/Box";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { addCartItem, removeCartItem } from "../store/action";
import "./Album.css";
import Link from "@mui/material/Link";
import { MenuList } from "@mui/material";
import { MenuItem } from "@mui/material";

import TopBanner, { topBannerDetail } from "./top-banner/topBanner";
import { baseURL } from "../services/httpCommon";

const theme = createTheme();

export default function Album() {
  // const dispatch = useDispatch();
  // const addCart = (item) => {
  //   dispatch(addCartItem(item));
  // };
  // const remove = (item) => {
  //   dispatch(removeCartItem(item));
  // };
  const countData = useSelector((state) => state.cartReducer.count);

  localStorage.setItem(Number, JSON.stringify(countData));

  const [item, setItem] = React.useState(null);

  // const idBoolean = (id) => {
  //   return countData.some((data) => data.id === id);
  // };

  React.useEffect(() => {
    axios
      .get(baseURL + "/item")
      .then((response) => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        console.log(response);
        setItem(response.data);
      })
      .catch((error) => {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.error(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <Grid container>
          <Grid item md={12}>
            {TopBanner()}
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "#efefef" }}>
          <Grid md={1}></Grid>

          <Grid md={2} sx={{ pt: 6 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              カテゴリー
            </Typography>
            <MenuList sx={{ pr: 2 }}>
              <MenuItem>
                <Typography variant="subtitle2">食料品</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="subtitle2">美容品</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="subtitle2">雑貨</Typography>
              </MenuItem>
            </MenuList>
          </Grid>

          <Grid md={8} container spacing={2}>
            <Grid item md={12} sx={{ m: 4 }}>
              <Box
                sx={{
                  pt: 1,
                  pb: 1,
                  color: "white",
                  bgcolor: "error.light",
                  borderRadius: 2,
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
            <Grid item md={12}>
              <Typography sx={{ pt: 1 }} variant="h6">
                商品一覧
              </Typography>
              <Typography variant="subtitle1" style={{ color: "#787569" }}>
                価格やその他の詳細は、商品のサイズや色によって異なる場合があります。
              </Typography>
            </Grid>
            {/* {item.length ===
              0(
                <div>{`${Params.name}の検索に一致する商品はありませんでした。`}</div>
              )} */}

            {item?.map((item) => (
              <Grid item key={item.itemId} xs={12} sm={6} md={3} maxWidth="md">
                <Card
                  elevation={13}
                  sx={{
                    mb: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: 440,
                    borderRadius: 2,
                    backgroundColor: "#fafdfd",
                  }}
                >
                  <Link
                    variant="subtitle1"
                    className="overflow-name"
                    href={`/${item.itemId}`}
                    underline="none"
                  >
                    <CardMedia
                      sx={{
                        height: "200px",
                        width: "auto",
                      }}
                      image={item.url}
                      alt={item.name}
                      className="cardImage"
                    />
                  </Link>

                  <CardContent>
                    <Grid
                      sx={{
                        flexGrow: 2,
                      }}
                    >
                      <Box bgcolor="background.paper">
                        {/* <Typography variant="subtitle1" className="overflow-name">
                        {item.name}
                      </Typography> */}
                        <Link
                          variant="subtitle1"
                          className="overflow-name"
                          href={`/${item.itemId}`}
                          underline="none"
                          color="inherit"
                        >
                          {item.name}
                        </Link>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" className="overflow">
                          {item.description}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid>
                      <Box sx={{ p: 2, alignSelf: "flex-end" }}>
                        <Typography variant="h6" color="error">
                          ¥{item.price}
                        </Typography>
                      </Box>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}
