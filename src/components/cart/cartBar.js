import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { cartPriceSum } from "../../store/price-sum/calculation";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CartBarDetail = (cartData) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Grid>
      {cartData.length !== 0 && (
        <Grid display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5">合計:</Typography>
            {/* <Typography variant="subtitle2">（税込）</Typography> */}
            <Typography variant="h3" fontWeight="bold">
              ¥{cartPriceSum(cartData).toLocaleString()}
            </Typography>
          </Box>

          <Button
            sx={{
              m: 2,
              p: 2,
              width: "200px",
              // bgcolor: "#699acf",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              borderRadius: 15,
              boxShadow: "none",
              justifyContent: "center",
              background:
                "linear-gradient(90deg, rgba(105, 154, 207, 0.95), rgba(141, 173, 208, 1))",
            }}
            onClick={isAuthenticated === false ? loginWithRedirect : null}
            variant="contained"
            size="small"
            to={isAuthenticated === true ? "/checkout" : ""}
            component={Link}
            color="info"
          >
            <ShoppingCartCheckoutIcon />
            <Typography fontWeight="bold">チェックアウト</Typography>
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

const CartBar = (props) => {
  return <Grid>{CartBarDetail(props.cartData)}</Grid>;
};
export default CartBar;
