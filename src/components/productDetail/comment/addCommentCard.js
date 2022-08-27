import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { baseURL } from "../../../services/httpCommon";

const AddCommentCardDetail = (itemId) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const addCommentRequest = () => {
    axios
      .post(baseURL + "/add/comment", {
        itemId: itemId,
        name: name,
        comment: comment,
        rating: rating,
      })
      .then();
  };
  return (
    <Grid
      sx={{
        mb: 6,

        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          mt: 3,
          px: { xs: 3, sm: 10 },
          display: "flex",

          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Rating
            value={rating}
            sx={{
              "& :hover": {
                color: "orange",
              },
            }}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            size="small"
          />
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontSize="10px" sx={{ color: "GrayText" }}>
              ニックネーム:　
            </Typography>
            <TextField
              sx={{ maxWidth: "200px" }}
              onChange={(event, newValue) => {
                setName(event.currentTarget.value);
              }}
              size="small"
            />
          </Grid>
        </Grid>

        <TextareaAutosize
          minRows={5}
          placeholder="入力してください。"
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "97%",
            border: "0",
            borderRadius: "14px",
            borderColor: "darkblue",
            boxShadow: "0 0px 15px #d1cbcb",
          }}
          onChange={(event, newValue) => {
            setComment(event.currentTarget.value);
          }}
        />
      </Box>
      <Grid
        sx={{
          my: 5,
          display: "flex",

          justifyContent: "center",
        }}
      >
        <Link href={"/" + itemId} underline="none">
          <Button
            onClick={() => {
              addCommentRequest();
            }}
            variant="contained"
            sx={{
              p: 1,
              px: 20,
              boxShadow: "none",
              // bgcolor: "#699acf",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              borderRadius: 15,
              justifyContent: "center",
              background:
                " linear-gradient(90deg, rgba(187, 183, 223, 0.95), rgba(187, 183, 200, 1))",
            }}
          >
            <Typography sx={{ color: "white" }} fontWeight="bold">
              登録
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
const AddCommentCard = (props) => {
  return <>{AddCommentCardDetail(props.itemId)}</>;
};
export default AddCommentCard;
