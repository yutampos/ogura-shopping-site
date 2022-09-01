import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { baseURL } from "../../services/httpCommon";
import AddCommentCard from "./comment/addCommentCard";
import CommentCard from "./comment/comment";
import ImageView from "./imageCard/imageView";
import ProductInfo from "./productInfo/productInfo";

const ProductDetail = () => {
  const { isAuthenticated } = useAuth0();
  const Params = useParams();

  const [item, setItem] = React.useState({
    itemId: "",
    taxId: "",
    name: "",
    description: "",
    price: 0,
    itemImages: [{ url: "" }],
  });
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
    <Grid sx={{ mt: { xs: 4, md: 0 } }}>
      <Grid container>
        <Grid item md={1} xl={2}></Grid>
        <Grid item xs={12} md={10} xl={8}>
          <Grid display="flex" flexDirection="column" sx={{}}>
            <Grid
              display="flex"
              flexDirection={{ md: "row", xs: "column" }}
              sx={{
                justifyContent: "space-between",
                pt: { xs: 0, md: 8 },
                alignItems: { xs: "center", md: "normal" },
              }}
            >
              <Grid
                sx={{
                  width: { xs: "100%", sm: "70%", md: "50%" },
                  maxHeight: "600px",
                }}
              >
                <ImageView itemImages={item.itemImages} />
              </Grid>

              <Grid sx={{ width: { xs: "100%", md: "50%" } }}>
                <ProductInfo item={item} />
              </Grid>
            </Grid>
            <Grid id="review" sx={{ mt: 20 }}>
              <Typography textAlign="center">商品評価</Typography>
              {item.itemId === "" ? <></> : <CommentCard item={item} />}
              <Typography id="review" textAlign="center" sx={{ mt: 10 }}>
                商品レビューを書く
              </Typography>
              {isAuthenticated === true ? (
                <AddCommentCard itemId={item.itemId} />
              ) : (
                <Typography textAlign="center" sx={{ m: 5, color: "GrayText" }}>
                  レビューを書くにはログインが必要です
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} xl={2}></Grid>
      </Grid>
    </Grid>
  );
};
export default ProductDetail;
