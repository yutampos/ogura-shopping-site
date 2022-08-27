import { Grid } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { deadlineCalcu } from "../../calcu/product-retun/deadlineCalculation";
import { Box } from "@mui/system";
import Moment from "moment";
import { Paper } from "@mui/material";
import "./shoppingHistory.css";
import { Link } from "@mui/material";

const historyItemsCardDetail = (data) => {
  const Calcu = (date) => {
    const deadlineDate = deadlineCalcu(date);
    const formatDate = Moment(deadlineDate).format("YYYY年MM月DD日");
    return formatDate;
  };
  return data.map((data) => {
    return (
      <Grid>
        <Paper
          sx={{
            width: "100%",
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 2,
          }}
          elevation={0}
        >
          <Box sx={{ pl: 3, display: "flex", alignItems: "center" }}>
            <ButtonBase
              sx={{
                maxWidth: { xs: "50px", md: "80px" },
                maxheight: { xs: "50px", md: "80px" },
              }}
            >
              <img
                class="img"
                src={data.url}
                alt={data.name}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  minWidth: "50px",
                  minHeight: "50px",
                  // borderRadius: "10px",
                  // boxShadow: "0 0 9px rgba(203,201,201)",
                  // mixBlendMode: "multiply",
                }}
              />
            </ButtonBase>
            <Box sx={{ pl: 3 }}>
              <Typography
                variant="subtitle1"
                className="titleOrverWrap"
                sx={{ fontSize: { xs: "12px", sm: "15px" } }}
              >
                {data.name}
              </Typography>
              <Typography
                color="brown"
                variant="subtitle2"
                sx={{ fontSize: { xs: "9px", sm: "11px" } }}
              >
                {data.deliveryDate === null
                  ? "商品ご到着までお待ちください(到着後返品期間が表示されます)"
                  : "返品期間" + Calcu(data.deliveryDate) + "まで"}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ px: 1 }}>
            <Grid
              sx={{
                // mx: 3,
                display: { sm: "flex" },
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
              }}
            >
              <Grid sx={{ mr: { xs: 0, md: 3 }, mb: { xs: 1, md: 0 } }}>
                <Link href={`/${data.itemId}`} underline="none">
                  <Button
                    sx={{
                      width: { xs: "100px", sm: "130px", md: "200px" },
                      // bgcolor: "primary.main",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 15,
                      justifyContent: "center",
                      boxShadow: "none",
                      background:
                        " linear-gradient(90deg, rgba(187, 183, 223, 0.95), rgba(187, 183, 200, 1))",
                    }}
                    variant="contained"
                    size="small"
                  >
                    <Typography
                      sx={{ fontSize: { xs: "7px", sm: "10px", md: "13px" } }}
                    >
                      レビューを書く
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: "7px", sm: "10px", md: "13px" } }}
                    >
                      再度購入する
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    );
  });
};

const HistoryItemsCard = (props) => {
  return <>{historyItemsCardDetail(props.data)}</>;
};

export default HistoryItemsCard;
