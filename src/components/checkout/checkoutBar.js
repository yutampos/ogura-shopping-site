import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInputNum } from "../../store/action/checkoutAction";
import { cartPriceSum } from "../../store/price-sum/calculation";
import { CheckoutSumCalcu, DeliveryFeeCalcu } from "./checkout-sum/calculation";
import "./checkoutBar.css";

export default function CheckoutBar() {
  const cartData = useSelector((state) => state.cartReducer.count);

  const priceSum = cartPriceSum(cartData);

  const dispatch = useDispatch();
  const DeliveryFee = DeliveryFeeCalcu(priceSum);

  useEffect(() => {
    dispatch(handleInputNum(DeliveryFee, "delivery_charge"));
  });

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 0, md: 3 },
        borderRadius: 3,
        boxShadow: { xs: "none", md: " 0px 0px 3px #d1cbcb" },
      }}
    >
      <Grid sx={{ mb: 13 }}>
        {cartData.map((state) => (
          <Grid sx={{ mb: 3 }}>
            <Box
              sx={{
                py: 2,
                px: 2,
                borderRadius: 3,
                boxShadow: " 0px 0px 3px #d1cbcb",
                bgcolor: "white",
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <Grid
                  sx={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      maxWidth: "60px",
                      maxHeight: "60px",
                      objectFit: "contain",
                      mixBlendMode: "multiply",
                    }}
                    src={state.url}
                    alt={state.name}
                  />
                </Grid>
                <Typography className="titleOrverWrap" sx={{ pl: 2 }}>
                  {state.name}
                </Typography>
              </Box>
              <Typography>{`¥${state.price.toLocaleString()}`}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <hr></hr>
      <Grid sx={{ m: 1, my: 4 }}>
        <Box sx={{ py: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography>小計</Typography>
          <Typography>¥{priceSum.toLocaleString()}</Typography>
        </Box>
        <Box
          sx={{
            py: 1,
            pt: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>配送料</Typography>

          {DeliveryFee === 0 ? (
            <Typography color="yellowgreen">無料</Typography>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ mr: 4 }}
                variant="subtitle2"
                fontSize="10px"
                color="red"
              >
                ※1万円以上は無料
              </Typography>
              <Typography>¥{DeliveryFee.toLocaleString()}</Typography>
            </Box>
          )}
        </Box>
      </Grid>

      <hr></hr>
      <Grid sx={{ m: 1 }}>
        <Box
          sx={{
            py: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>合計:</Typography>
          <Typography fontSize="22px">
            ¥{CheckoutSumCalcu(priceSum, DeliveryFee).toLocaleString()}
          </Typography>
        </Box>
      </Grid>
    </Paper>
  );
}
