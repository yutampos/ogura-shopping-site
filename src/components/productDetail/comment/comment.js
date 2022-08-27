import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { baseURL } from "../../../services/httpCommon";
import { GetComment } from "../../../services/rest-api-service/dataBaseRequest";
import CommentCardDetail from "./commentCardDetail";
import Moment from "moment";

const CardDetail = (item) => {
  // const orderDate = (date) => {
  //   const formatDate = moment(date).format("YYYY年MM月DD日");
  //   return formatDate;
  // };
  // const handleClickOpen = () => {
  //   setDialogBoolean(true);
  // };
  // const getCommentData = (itemId) => {
  //   return GetComment(itemId);
  // };
  const [CommentData, setCommentData] = useState([
    {
      id: "",
      itemId: "",
      name: "",
      comment: "",
      rating: "",
      createdDate: "",
    },
  ]);
  console.log(item.itemId);

  useEffect(() => {
    // console.log(GetComment(item.itemId));
    axios
      .get(baseURL + "/get/comment/" + item.itemId)
      .then((response) => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)

        setCommentData(response.data);
      })
      .catch((error) => {
        // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.error(error);
      });
  }, []);

  const replaceToStringDate = (date) => {
    return Moment(date).format("YYYY年MM月DD日");
  };
  return CommentData.length !== 0 ? (
    CommentData.map((data) => {
      return (
        <Paper
          elevation={0}
          sx={{
            mt: 5,
            mb: 6,
            mx: { xs: 3, sm: 10 },
            p: 2,
            borderRadius: 3,
            boxShadow: "0 0px 15px #d1cbcb",
          }}
          // style={{ backgroundColor: "#efefef" }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: 3,
              alignItems: "center",
              height: { xs: "40px", sm: "auto" },
              p: 1,
            }}
            style={{ backgroundColor: "#efefef" }}
          >
            <Rating
              name="read-only"
              value={data.rating}
              precision={0.5}
              readOnly
            />

            <Typography sx={{ color: "GrayText" }}>{data.name}</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ color: "GrayText" }}>
                {replaceToStringDate(data.createdDate)}
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ pt: 1, pb: 1 }}>{CommentCardDetail(data)}</Grid>
        </Paper>
      );
    })
  ) : (
    <Typography sx={{ mt: 6, color: "GrayText" }} textAlign="center">
      レビューがありません。商品をレビューしませんか？
    </Typography>
  );
};

const CommentCard = (props) => {
  // const [dialogBoolean, setDialogBoolean] = useState(false);
  return <>{CardDetail(props.item)}</>;
};

export default CommentCard;
