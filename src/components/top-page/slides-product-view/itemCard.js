import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import Link from "@mui/material/Link";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import { SwiperSlide } from "swiper/react";
import "./itemCard.css";
import { Grid } from "@mui/material";

const itemCardDetail = (item) => {
  return (
    <Link href={`/${item.itemId}`} sx={{ width: "100%" }} underline="none">
      <Grid
        key={item.itemId}
        sx={{
          mb: 1,
          mt: 1,
          // mx: 1,
          width: "100%",
          height: { xs: "200px", sm: "250px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "none",

          // boxShadow: "0 0 4px #999797 ",
          // borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        <Box
          sx={{
            m: 2,
            height: "100%",
            mixBlendMode: "multiply",
            minHeight: { xs: "60px", sm: "100px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              maxWidth: "100px",
              maxHeight: { xs: "60px", sm: "100px" },
              width: "auto",
              height: "auto",
              borderRadius: "5px",
            }}
            image={item.url}
            alt="ss"
          />
        </Box>

        <CardContent
          sx={{
            height: "100%",
            maxWidth: "76%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            className="titleOrverWrap"
            variant="subtitle2"
            fontWeight="600"
            sx={{ color: "#5F5F5F" }}
          >
            {item.name}
          </Typography>
          <Typography
            className="textOrverWrapLine1"
            variant="subtitle2"
            sx={{ color: "#A4A4A4" }}
          >
            {item.description}
          </Typography>
          <Typography
            fontWeight="600"
            variant="subtitle1"
            sx={{ color: "red" }}
          >
            ¥{item.price.toLocaleString()}
          </Typography>
        </CardContent>
      </Grid>
    </Link>
  );
};
const ItemCard = (props) => {
  return <>{itemCardDetail(props.item)}</>;
};
export default ItemCard;
