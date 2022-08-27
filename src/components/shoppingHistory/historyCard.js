import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { useState } from "react";

import HistoryItemsCard from "./historyItemsCard";
import InfoDialog from "./infoDialog";

const historyCardDetail = (shoppingData) => {
  const orderDate = (date) => {
    const formatDate = moment(date).format("YYYY年MM月DD日");
    return formatDate;
  };
  // const handleClickOpen = () => {
  //   setDialogBoolean(true);
  // };

  return shoppingData.map((data) => {
    return (
      <Paper
        elevation={0}
        sx={{
          mt: 2,
          mb: 6,
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
          }}
          style={{ backgroundColor: "#efefef" }}
        >
          {/* <Button
            onClick={handleClickOpen}
            color="secondary"
            sx={{
              mx: 3,
              width: "100px",
              height: "35px",
              display: { xs: "-moz-initial", sm: "none" },
            }}
            variant="outlined"
          >
            注文詳細
          </Button>
          <Grid sx={{ display: { xs: "-moz-initial", sm: "none" } }}>
            {" "}
            {InfoDialog(data, dialogBoolean, setDialogBoolean)}
            <InfoDialog
              data={data}
              dialogBoolean={dialogBoolean}
              setDialogBoolean={setDialogBoolean}
            />
          </Grid> */}
          {InfoDialog(data)}

          <Grid sx={{ p: 2, display: { xs: "none", sm: "flex" } }}>
            <Box>
              <Typography variant="subtitle1">注文日</Typography>
              <Typography variant="subtitle2" color="GrayText">
                {orderDate(data.orderDate)}
              </Typography>
            </Box>
            <Box sx={{ pl: 5 }}>
              <Typography variant="subtitle1">合計</Typography>
              <Typography variant="subtitle2" color="GrayText">
                ¥{data.totalPayment.toLocaleString()}
              </Typography>
            </Box>
            <Box sx={{ pl: 5 }}>
              <Typography variant="subtitle1">お届け先</Typography>
              <Typography variant="subtitle2" color="GrayText">
                {data.zipCode}　{data.prefecture}　{data.city}　
                {data.otherAddress}
              </Typography>
            </Box>
          </Grid>

          <Grid sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize="8px"
                sx={{ fontSize: { xs: "8px", sm: "15px" } }}
              >
                注文番号　
              </Typography>
              <Typography
                fontSize="8px"
                color="GrayText"
                sx={{ fontSize: { xs: "8px", sm: "13px" } }}
              >
                {data.id}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid sx={{ pt: 1, pb: 5 }}>
          <HistoryItemsCard data={data.orderItemsDetail} />
        </Grid>
      </Paper>
    );
  });
};

const HistoryCard = (props) => {
  // const [dialogBoolean, setDialogBoolean] = useState(false);
  return <>{historyCardDetail(props.data)}</>;
};

export default HistoryCard;
