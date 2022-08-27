import { Grid } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

import { Box } from "@mui/system";
import Moment from "moment";
import { Paper } from "@mui/material";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useState } from "react";

const CardDetail = (data) => {
  // const Calcu = (date) => {
  //   const deadlineDate = deadlineCalcu(date);
  //   const formatDate = Moment(deadlineDate).format("YYYY年MM月DD日");
  //   return formatDate;
  // };
  console.log(data);

  return (
    <Grid>
      <Paper
        sx={{
          width: "100%",
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 2,
        }}
        elevation={0}
      >
        <Box sx={{ px: 1, width: "100%" }}>
          <Grid
            sx={{
              // mx: 3,
              display: { sm: "flex" },
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography>{data.comment}</Typography>
            {/* <Grid display="flex" justifyContent="right">
              <Button
                sx={{
                  width: { xs: "90px", sm: "130px", md: "200px" },
                  // bgcolor: "primary.main",

                  borderRadius: 3,
                }}
                variant="outlined"
                size="small"
              >
                <ThumbUpOffAltIcon />
              </Button>
            </Grid> */}
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

const CommentCardDetail = (data) => {
  return <>{CardDetail(data)}</>;
};

export default CommentCardDetail;
