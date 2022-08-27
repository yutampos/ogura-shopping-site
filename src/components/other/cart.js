import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { decreaseItem, increaseItem, removeCartItem } from "../../store/action";
import { ButtonBase } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../components/Cart.css";
import { cartPriceSum } from "../../store/price-sum/calculation";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  height: "100px",
  maxWidth: "100%",
  maxHeight: "100%",
});

function App(props) {
  const countData = useSelector((state) => state.cartReducer.count);

  const dispatch = useDispatch();
  const increase = (item) => {
    dispatch(increaseItem(item));
  };
  const decrease = (item) => {
    dispatch(decreaseItem(item));
  };
  const remove = (item) => {
    dispatch(removeCartItem(item));
  };

  localStorage.setItem(Number, JSON.stringify(countData));

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Grid sx={{ pb: 100 }} container style={{ backgroundColor: "#efefef" }}>
      <Grid item sm={1} xs={0} md={1} />
      <Grid item sm={9} xs={12} md={9}>
        <Typography
          sx={{ pt: 3, textAlign: { md: "start" }, pl: { md: "70px" } }}
          align="center"
          variant="h4"
          fontWeight="medium"
        >
          ショッピングカート
        </Typography>
        <div>
          {countData.length === 0 && (
            <Typography sx={{ pt: 15 }} align="center" variant="h6">
              カートに商品がありません
            </Typography>
          )}
        </div>
      </Grid>
      <Grid item sm={2} xs={0} md={2} />
      <Grid item md={1}></Grid>
      <Grid item sm={9} xs={12} md={8}>
        {countData.map((item) => (
          <div key={item.itemId} className="row">
            <Paper
              elevation={13}
              sx={{
                p: 2,
                m: 2,
                flexGrow: 1,
                borderRadius: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fafdfd",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <ButtonBase xs={{ width: 128, height: 128 }}>
                    <Img class="img" src={item.url} alt="" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={8} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid
                      item
                      xs
                      // sx={{
                      //   display: "flex",
                      //   flexDirection: "column",
                      //   alignContent: "space-between",
                      // }}
                    >
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography class="textOrverWrap">
                        {item.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        商品ID:{item.itemId}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid>
                    <Typography variant="subtitle1">
                      {item.quantity} 個 　¥{item.price}
                    </Typography>
                    <ButtonGroup>
                      {item.quantity === 1 ? (
                        <Button disabled onClick={() => decrease(item)}>
                          {" "}
                          <RemoveIcon fontSize="small" />
                        </Button>
                      ) : (
                        <Button onClick={() => decrease(item)}>
                          {" "}
                          <RemoveIcon fontSize="small" />
                        </Button>
                      )}

                      <Button onClick={() => increase(item)}>
                        {" "}
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                    <Grid item>
                      <Button onClick={() => remove(item)}>
                        {" "}
                        <RemoveShoppingCartIcon fontSize="small" />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ))}
      </Grid>

      <Grid item sm={3} md={2}>
        {countData.length !== 0 && (
          <Grid sx={{ pl: { md: 4 } }}>
            <div>
              <Typography variant="h5" sx={{ ml: 1 }}>
                合計:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  （税込）
                </Typography>
                <Typography variant="h3" fontWeight="bold">
                  ¥{cartPriceSum(countData)}
                </Typography>
              </Box>
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <ButtonBase>
                  <Box
                    sx={{
                      p: 2,
                      minWidth: "130px",
                      maxWidth: "sx",
                      bgcolor: "info.main",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      borderRadius: 2,
                      justifyContent: "center",
                    }}
                    to={isAuthenticated === true ? "/checkout" : ""}
                    component={Link}
                    style={{ textDecoration: "none" }}
                    onClick={
                      isAuthenticated === false ? loginWithRedirect : null
                    }
                  >
                    <ShoppingCartCheckoutIcon sx={{ color: "white" }} />
                    <Typography sx={{ color: "white" }}>レジに進む</Typography>
                  </Box>
                </ButtonBase>
              </Grid>
            </div>
          </Grid>
        )}
        <Grid item md={1}></Grid>
      </Grid>
    </Grid>
  );
}
export default App;
