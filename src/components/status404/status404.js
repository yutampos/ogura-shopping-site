import { Button } from "@mui/material";
import { Link } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Status404 = () => {
  return (
    <Grid
      sx={{
        mt: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography textAlign="center" variant="h1" fontSize="30px">
        404 ページが見つかりません
      </Typography>
      <Grid sx={{ mt: 8, color: "#8e8e8e" }}>
        <Typography fontSize="16px" variant="h2" textAlign="center">
          再度リロードしても直らない場合、URLに誤りがある可能性があります。
        </Typography>
        <Typography variant="h2" fontSize="16px" textAlign="center">
          お手数ですが、ホームに戻り再度やり直すか、URLを見直してください。
        </Typography>
      </Grid>

      <Link href="/" underline="none">
        <Button
          sx={{
            mt: 10,
            p: 2,
            width: "200px",
            // bgcolor: "#699acf",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            borderRadius: 15,
            boxShadow: "none",
            justifyContent: "center",
            background:
              "linear-gradient(90deg, rgba(105, 154, 207, 0.95), rgba(141, 173, 208, 1))",
          }}
          variant="contained"
        >
          ホームへ移る
        </Button>
      </Link>
    </Grid>
  );
};
export default Status404;
