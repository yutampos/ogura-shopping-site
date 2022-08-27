import { Dialog } from "@mui/material";
import { Typography } from "@mui/material";
import { DialogContent } from "@mui/material";
import { Button } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { useState } from "react";

const InfoView = (data, dialogBoolean, setDialogBoolean) => {
  const orderDate = (date) => {
    const formatDate = moment(date).format("YYYY年MM月DD日");
    return formatDate;
  };

  const handleClickOpen = () => {
    setDialogBoolean(true);
  };
  const onCloseDialog = () => {
    setDialogBoolean(false);
  };
  console.log(data);

  return (
    <Grid sx={{ display: { xs: "-moz-initial", sm: "none" } }}>
      <Button
        onClick={handleClickOpen}
        color="secondary"
        sx={{
          mx: 3,
          width: "80px",
          height: "auto",
          display: { xs: "-moz-initial", sm: "none" },
        }}
        variant="outlined"
      >
        <Typography sx={{ fontSize: "8px" }}>注文詳細</Typography>
      </Button>

      <Dialog
        open={dialogBoolean}
        onClose={onCloseDialog}
        fullWidth
        key={data.id}
      >
        <DialogTitle>注文詳細</DialogTitle>
        <DialogContent>
          <Box>
            <Typography variant="subtitle1">注文日</Typography>
            <Typography variant="subtitle2" color="GrayText">
              {orderDate(data.orderDate)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">合計</Typography>
            <Typography variant="subtitle2" color="GrayText">
              ¥{data.totalPayment.toLocaleString()}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">お届け先</Typography>
            <Typography variant="subtitle2" color="GrayText">
              {data.zipCode}　{data.prefecture}　{data.city}　
              {data.otherAddress}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};
const InfoDialog = (data) => {
  const [dialogBoolean, setDialogBoolean] = useState(false);
  return <>{InfoView(data, dialogBoolean, setDialogBoolean)}</>;
};
export default InfoDialog;
