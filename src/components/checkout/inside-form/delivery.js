import { Checkbox } from "@mui/material";
import { FormGroup } from "@mui/material";

import { Paper } from "@mui/material";
import { CardContent } from "@mui/material";

import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { handleInputMenu } from "../../../store/action/checkoutAction";
import { cartPriceSum } from "../../../store/price-sum/calculation";
import { DeliveryFeeCalcu } from "../checkout-sum/calculation";

export default function Delivery() {
  const checkoutData = useSelector((state) => state.checkoutReducer);
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartReducer.count);
  const priceSum = cartPriceSum(cartData);
  const DeliveryFee = DeliveryFeeCalcu(priceSum);
  return (
    <FormGroup>
      <Grid>
        <Grid sx={{ p: 4, pb: 6 }}>
          <Typography>配送方法</Typography>

          <Paper
            variant="outlined"
            sx={{
              width: "100%",
              height: "50px",
              display: "flex",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checkoutData.delivery_method === "0"}
                value="0"
                onClick={(e) => {
                  dispatch(handleInputMenu(e, "delivery_method"));
                }}
              />{" "}
              <Typography>通常配送</Typography>
            </CardContent>
            <CardContent>
              <Typography>¥{DeliveryFee}</Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </FormGroup>
  );
}
