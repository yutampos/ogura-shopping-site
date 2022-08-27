import { FormGroup } from "@mui/material";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

export default function Delivery(props) {
  const checkoutData = useSelector((state) => state.checkoutReducer);
  const paymentMethod = (num) => {
    if (num === "0") {
      return "クレジットカード払い";
    }
    if (num === "1") {
      return "現金支払い";
    }
    if (num === "2") {
      return "コンビニ払い";
    }
  };

  const clickChangeStep = (num) => {
    props.setActiveStep(num);
  };

  return (
    <FormGroup>
      <Grid>
        <Grid sx={{ p: 4 }}>
          <Typography>入力確認</Typography>

          <Paper
            variant="outlined"
            sx={{
              my: 2,
              py: 1,
              px: 2,
              display: "flex",
              alignItems: "center",
              alignContent: "space-around",
            }}
          >
            <Grid
              sx={{
                width: "90%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>連絡先</Typography>
                <Typography>{checkoutData.email}</Typography>
              </Box>
              <Box
                sx={{
                  pt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>お名前</Typography>
                <Typography>{`${checkoutData.f_name} ${checkoutData.l_name}`}</Typography>
              </Box>

              <Box
                sx={{
                  pt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>配送先</Typography>
                <Typography>{`${checkoutData.prefecture}${checkoutData.city}${checkoutData.o_address}`}</Typography>
              </Box>
              <Box
                sx={{
                  pt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>電話番号</Typography>
                <Typography>{checkoutData.tell}</Typography>
              </Box>
            </Grid>
            <Button
              sx={{
                width: "10%",
              }}
              onClick={() => {
                clickChangeStep(0);
              }}
            >
              編集
            </Button>
          </Paper>

          <Grid>
            <Paper
              variant="outlined"
              sx={{
                my: 2,
                py: 1,
                px: 2,
                display: "flex",
                alignItems: "center",
                alignContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <Typography>支払い方法</Typography>
                <Typography>
                  {checkoutData.payment_method === "2"
                    ? paymentMethod(checkoutData.payment_method) +
                      checkoutData.pay_convinience_method
                    : paymentMethod(checkoutData.payment_method)}
                </Typography>
              </Box>

              <Button
                sx={{
                  width: "10%",
                }}
                onClick={() => {
                  clickChangeStep(2);
                }}
              >
                編集
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </FormGroup>
  );
}
