import { Paper } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "./Cart.css";

import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem, removeCartItem } from "../../store/action";
import { IconButton } from "@mui/material";

const mobileItemCard = (data, increase, decrease, remove, dispatch) => {
  console.log(data);
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",

        height: "100%",
      }}
      key={data.itemId}
    >
      <Box sx={{ p: 1, pr: 2 }}>
        <img
          src={data.url}
          alt={data.name}
          style={{
            width: "40px",
            height: "40px",
            // borderRadius: "10px",
            objectFit: "contain",
            // boxShadow: "0 0 9px rgba(203,201,201)",
            // mixBlendMode: "multiply",
          }}
        />
      </Box>
      <Box
        sx={{
          pt: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className="titleOrverWrap"
          variant="subtitle2"
          color="textSecondary"
        >
          {data.name}
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>¥{data.price.toLocaleString()}</Typography>
          <Grid sx={{ display: "flex" }}>
            <Grid
              elevation={3}
              sx={{
                width: "130px",
                borderRadius: 3,
                // width: "200px",
                py: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton sx={{ pr: 4 }} onClick={() => remove(data)}>
                {" "}
                <RemoveShoppingCartIcon
                  sx={{ color: "gray", fontSize: "16px" }}
                />
              </IconButton>
              <IconButton
                // variant={data.quantity === 1 ? "contained" : "outlined"}
                onClick={() => decrease(data)}
                disabled={data.quantity === 1 ? true : false}
                size="small"
                sx={{ color: "gray", borderColor: "white" }}
              >
                {" "}
                <RemoveIcon style={{ width: "30px" }} />
              </IconButton>

              <Box
                style={{ pointerEvents: "none" }}
                size="small"
                sx={{
                  color: "gray",
                  borderColor: "white",
                  fontWeight: "bold",

                  width: "15px",
                }}
              >
                <Typography variant="body1">{data.quantity}</Typography>
              </Box>
              <IconButton
                onClick={() => increase(data)}
                size="small"
                sx={{ color: "gray", borderColor: "white" }}
              >
                {" "}
                <AddIcon style={{ width: "30px" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

const CartItem = (cartData) => {
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

  return cartData.map((data) => {
    return (
      <Paper
        sx={{
          p: 2,
          m: 2,
          borderRadius: 3,
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 0px 15px #d1cbcb",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-start",
          }}
        >
          <Box>
            <img
              src={data.url}
              alt={data.name}
              style={{
                width: "100px",
                height: "100px",
                // borderRadius: "10px",
                objectFit: "contain",
                // boxShadow: "0 0 9px rgba(203,201,201)",
                // mixBlendMode: "multiply",
              }}
            />
            <Typography variant="subtitle2" color="textSecondary">
              商品ID:{data.itemId}
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 1,
              ml: 3,

              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="subtitle1"
              className="titleOrverWrap"
              sx={{ fontWeight: 500 }}
            >
              {data.name}
            </Typography>
            <Typography
              variant="subtitle2"
              className="textOrverWrap"
              sx={{ ml: 2, fontWeight: "light", color: "#9e9e9e" }}
            >
              {data.description}
            </Typography>
            <Typography
              sx={{ fontWeight: 600 }}
              variant="subtitle1"
              color="textSecondary"
            >
              ¥{data.price.toLocaleString()}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ml: 3,
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* <ButtonGroup
            // orientation="vertical"
            variant="outlined"
            style={{
              boxShadow: "0 0 7px rgba(183,193,204)",
            }}
          ></ButtonGroup> */}
          <Grid
            elevation={3}
            sx={{
              width: "130px",
              borderRadius: 3,
              // width: "200px",
              py: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              // variant={data.quantity === 1 ? "contained" : "outlined"}
              onClick={() => decrease(data)}
              disabled={data.quantity === 1 ? true : false}
              size="small"
              sx={{ color: "gray", borderColor: "white" }}
            >
              {" "}
              <RemoveIcon style={{ width: "30px" }} />
            </IconButton>

            <Box
              style={{ pointerEvents: "none" }}
              size="small"
              sx={{
                color: "gray",
                borderColor: "white",
                fontWeight: "bold",

                width: "15px",
              }}
            >
              <Typography variant="body1">{data.quantity}</Typography>
            </Box>
            <IconButton
              onClick={() => increase(data)}
              size="small"
              sx={{ color: "gray", borderColor: "white" }}
            >
              {" "}
              <AddIcon style={{ width: "30px" }} />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton onClick={() => remove(data)}>
              {" "}
              <RemoveShoppingCartIcon sx={{ color: "gray" }} fontSize="small" />
            </IconButton>
          </Grid>
        </Box>
        <Grid
          sx={{
            display: { xs: "block", sm: "none" },
            width: "100%",
            minHeight: "80px",
          }}
        >
          {mobileItemCard(data, increase, decrease, remove, dispatch)}
        </Grid>
      </Paper>
    );
  });
};
const CartItems = (props) => {
  return <Grid>{CartItem(props.cartData)}</Grid>;
};
export default CartItems;
