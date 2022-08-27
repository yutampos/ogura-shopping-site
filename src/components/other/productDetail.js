import { ButtonBase } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/action";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  height: "auto",
  width: "auto",
  maxWidth: "250px",
  maxHeight: "250px",
});

export default function Album() {
  const Params = useParams();
  const [item, setItem] = React.useState({
    itemId: "",
    taxId: "",
    name: "",
    description: "",
    price: 0,
  });
  const baseURL = "http://localhost:8080/api/item";

  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addCartItem(item));
  };

  const countData = useSelector((state) => state.cartReducer.count);
  const idBoolean = (id) => {
    return countData.some((data) => data.itemId === id);
  };

  localStorage.setItem(Number, JSON.stringify(countData));

  React.useEffect(() => {
    axios
      .get(baseURL + "/" + Params.itemId)
      .then((response) => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        // console.log(response);
        setItem(response.data);
        console.log(item);
      })
      .catch((error) => {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        // console.error(error);
      });
  }, []);
  console.log(item);

  return (
    <Grid sx={{ pb: 50 }} container style={{ backgroundColor: "#efefef" }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={4} sx={{ p: 10 }}>
        <Paper
          elevation={19}
          sx={{
            p: 2,

            flexGrow: 1,
            borderRadius: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fafdfd",
          }}
        >
          <Box
            sx={{
              p: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ButtonBase>
              <Img class="img" src={item.url} alt="" />
            </ButtonBase>
            {/* <img src={item.url} alt="ss" /> */}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4} sx={{ py: 9 }}>
        <Grid>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {item.name}
            </Typography>
            <hr></hr>
          </Box>

          <Box>
            <Typography>{item.description}</Typography>
          </Box>
          {/* <Box sx={{ pt: 6, display: "flex", justifyContent: "center" }}>
            <Typography sx={{ pt: 1 }} variant="subtitle1">
              ￥
            </Typography>
            <Typography sx={{}} variant="h4">
              {item.price}
            </Typography>
          </Box> */}
          <Box
            sx={{
              py: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid>
              <hr style={{ width: "100px" }}></hr>
            </Grid>
            <Grid sx={{ p: 3 }}>
              <div>オプション</div>
            </Grid>
            <Grid>
              <hr style={{ width: "100px" }}></hr>
            </Grid>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ pt: 1 }} variant="subtitle1">
              ￥
            </Typography>
            <Typography sx={{}} variant="h4">
              {item.price}
            </Typography>
          </Box>
          <Grid sx={{ pt: 2, display: "flex", justifyContent: "center" }}>
            <Typography>{item.status}</Typography>
          </Grid>
          <Grid
            sx={{ pt: 13, display: "flex", justifyContent: "space-evenly" }}
          >
            <ButtonBase sx={{ display: "flex" }}>
              <Button
                sx={{
                  p: 1,

                  bgcolor: "info.main",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  borderRadius: 2,
                  justifyContent: "center",
                }}
                onClick={() => addCart(item)}
                variant="contained"
                size="small"
                disabled={idBoolean(item.itemId)}
                disableElevation
              >
                <AddShoppingCartIcon sx={{ color: "white" }} />
                <Typography sx={{ color: "white" }}>カートに入れる</Typography>
              </Button>
            </ButtonBase>
            <ButtonBase sx={{ display: "flex" }}>
              <Button
                sx={{
                  p: 1,

                  bgcolor: "gold",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  borderRadius: 2,
                  justifyContent: "center",
                }}
                variant="contained"
                color="warning"
                disableElevation
              >
                <ShoppingCartCheckoutIcon sx={{ color: "black" }} />
                <Typography sx={{ color: "black" }}>今すぐ買う</Typography>
              </Button>
            </ButtonBase>
          </Grid>
          <Grid sx={{ display: "flex" }}></Grid>
        </Grid>
      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
}
