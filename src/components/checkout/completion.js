import { FormGroup } from "@mui/material";

import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import { ButtonBase } from "@mui/material";

import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function Completion() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid>
          <Grid sx={{ p: 2 }}>
            <Paper
              variant="outlined"
              sx={{
                pt: 1,
                px: 2,
                display: "flex",
                flexDirection: "column",
                alignContent: "space-around",
              }}
            >
              <Box sx={{}}>
                <Typography>ご購入ありがとうございます！</Typography>
                <Typography>配送に関しては追ってご連絡差し上げます</Typography>
                <Link href="/" underline="none">
                  <Button
                    sx={{
                      m: 1,
                      p: 1,
                      backgroundColor: "orange",

                      borderRadius: 1,
                    }}
                  >
                    ホームへ戻る
                  </Button>
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
