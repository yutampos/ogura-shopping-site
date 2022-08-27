import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../../../store/action";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const productInfoDetail = (item, addCart, removeCart, idBoolean) => {
  return (
    <Grid
      sx={{
        ml: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        sx={{
          alignItems: "center",
          pt: { md: 0, xs: 6 },
          maxWidth: { xs: "90%", md: "350px" },
        }}
      >
        <Box sx={{ px: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            {item.name}
          </Typography>
        </Box>
        <Typography sx={{ mt: 4, fontWeight: "600" }} variant="h4">
          ¥{item.price.toLocaleString()}
        </Typography>
      </Grid>
      <Grid
        display="flex"
        sx={{
          pt: { xs: 4, sm: 4, md: 8 },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "75px",
            p: 1,

            boxShadow: "0 0px 15px #d1cbcb",
            borderRadius: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CurrencyYenIcon
              sx={{
                mr: "4px",
                border: 1,
                borderColor: "GrayText",
                borderRadius: 10,
                p: "2px",
                bgcolor: "GrayText",
                color: "white",
                fontSize: "13px",
              }}
            />
            <Typography
              sx={{ display: "flex", alignItems: "baseline", fontSize: "13px" }}
            >
              1万円以上お買い上げで
              <Typography color="red">送料無料!</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardGiftcardIcon
              sx={{
                mr: "4px",
                border: 1,
                borderColor: "GrayText",
                borderRadius: 10,
                p: "2px",
                bgcolor: "GrayText",
                color: "white",
                fontSize: "13px",
              }}
            />
            <Typography sx={{ display: "flex", fontSize: "13px" }}>
              大切な人に！ギフトはいかがですか？
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocalShippingIcon
              sx={{
                mr: "4px",
                border: 1,
                borderColor: "GrayText",
                borderRadius: 10,
                p: "2px",
                bgcolor: "GrayText",
                color: "white",
                fontSize: "13px",
              }}
            />
            <Typography sx={{ display: "flex", fontSize: "13px" }}>
              即日配送なら最短明日の午前中にお届けできます
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Box
        sx={{
          height: "90px",
          mt: { xs: 4, sm: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ color: "green" }}>
          {item.status}
        </Typography>
        <Grid sx={{ mt: 4 }}>
          {idBoolean(item.itemId) === true ? (
            <Button
              sx={{
                p: 2,
                px: 4,
                bgcolor: "#ff7373",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                borderRadius: 15,
                boxShadow: "none",
                justifyContent: "center",
                background:
                  "linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(2252, 163, 0, 1))",
              }}
              onClick={() => removeCart(item)}
              variant="contained"
              size="small"
              color="warning"
            >
              <RemoveShoppingCartIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>カートから戻す</Typography>
            </Button>
          ) : (
            <Button
              sx={{
                p: 2,
                px: 4,
                // bgcolor: "#699acf",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                borderRadius: 15,
                justifyContent: "center",
                background:
                  "linear-gradient(90deg, rgba(105, 154, 207, 0.95), rgba(141, 173, 208, 1))",
                boxShadow: "none",
              }}
              onClick={() => addCart(item)}
              // onClick={
              //   idBoolean(item.itemId) === true ? removeCart(item) : addCart(item)
              // }

              variant="contained"
              size="small"
              disabled={
                item.status === "在庫なし（入荷予定はありません）"
                  ? true
                  : false
              }
            >
              <AddShoppingCartIcon
                sx={{
                  color: "white",
                }}
              />
              <Typography sx={{ color: "white" }}>カートに入れる</Typography>
            </Button>
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "90%", md: "350px" },
          minHeight: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 20,
          px: 6,
        }}
      >
        <Typography>商品説明</Typography>
        <Typography variant="subtitle2">{item.description}</Typography>
      </Box>
    </Grid>
  );
};
const ProductInfo = (props) => {
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addCartItem(item));
  };
  const removeCart = (item) => {
    dispatch(removeCartItem(item));
  };
  const countData = useSelector((state) => state.cartReducer.count);
  localStorage.setItem(Number, JSON.stringify(countData));
  const idBoolean = (id) => {
    return countData.some((data) => data.itemId === id);
  };

  return (
    <Grid>{productInfoDetail(props.item, addCart, removeCart, idBoolean)}</Grid>
  );
};
export default ProductInfo;
