import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import CartBar from "./cartBar";
import CartItems from "./cartItems";

const Cart = () => {
  const cartData = useSelector((state) => state.cartReducer.count);
  localStorage.setItem(Number, JSON.stringify(cartData));

  return (
    <Grid container>
      <Grid item md={1} xl={2} />
      <Grid item xs={12} md={10} xl={8}>
        <Grid>
          <Typography
            sx={{
              pt: 3,
              textAlign: { md: "start", xs: "center" },
              pl: { md: 5 },
            }}
            align="center"
            variant="h4"
            fontWeight="medium"
          >
            ショッピングカート
          </Typography>
          <div>
            {cartData.length === 0 && (
              <Typography sx={{ pt: 15 }} align="center" variant="h6">
                カートに商品がありません
              </Typography>
            )}
          </div>
        </Grid>

        <Grid
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          justifyContent="space-between"
        >
          <Grid sx={{ width: "100%" }}>
            <CartItems cartData={cartData} />
          </Grid>
          <Grid sx={{ mt: { xs: 10, md: 0 } }}>
            <CartBar cartData={cartData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={1} xl={2} />
    </Grid>
  );
};
export default Cart;
