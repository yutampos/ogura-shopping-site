import { DialogTitle } from "@mui/material";
import { Typography } from "@mui/material";
import { DialogActions } from "@mui/material";
import { Button } from "@mui/material";
import { DialogContent } from "@mui/material";
import { Dialog } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";

const checkDialogDetail = (
  data,
  replaceToGetedUserDetail,
  open,
  handleOnClose
) => {
  return (
    <Grid>
      <Dialog onClose={handleOnClose} open={open}>
        <DialogTitle>ユーザー登録情報を反映しますか？</DialogTitle>
        <DialogContent>
          <Typography>
            Eメールアドレス: {data.email === null ? "登録なし" : data.email}
          </Typography>
          <Typography>
            姓: {data.firstName === null ? "登録なし" : data.firstName}
          </Typography>
          <Typography>
            名: {data.lastName === null ? "登録なし" : data.lastName}
          </Typography>
          <Typography>
            郵便番号: {data.zipCode === null ? "登録なし" : data.zipCode}
          </Typography>
          <Typography>
            都道府県: {data.prefecture === null ? "登録なし" : data.prefecture}
          </Typography>
          <Typography>
            市区町村: {data.city === null ? "登録なし" : data.city}
          </Typography>
          <Typography>
            住所: {data.otherAddress === null ? "登録なし" : data.otherAddress}
          </Typography>
          <Typography>
            電話番号: {data.tell === null ? "登録なし" : data.tell}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleOnClose();
              replaceToGetedUserDetail(true);
            }}
          >
            はい
          </Button>
          <Button
            onClick={() => {
              handleOnClose();
            }}
          >
            いいえ
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
const CheckDialog = (data, replaceToGetedUserDetail) => {
  const [open, setOpen] = useState(true);
  // const [disableToDialog, setDisableToDialog] = useState(false);
  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <>
      {data === null ? (
        <></>
      ) : (
        checkDialogDetail(data, replaceToGetedUserDetail, open, handleOnClose)
      )}
    </>
  );
};
export default CheckDialog;
