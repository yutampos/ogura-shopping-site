import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";

import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";

import "./searchView.css";

const searchCardDetail = (items) => {
  return items.map((item) => {
    return (
      <Link
        href={`/${item.itemId}`}
        underline="none"
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        <Card
          elevation={0}
          key={item.itemId}
          sx={{
            p: { xs: 1, sm: 0 },
            m: 1,
            width: { xs: "auto", sm: "160px", lg: "180px" },
            height: { xs: "140px", sm: "250px" },
            display: "flex",
            flexDirection: { xs: "row", sm: "column" },
            justifyContent: { xs: "start", sm: "space-between" },
            alignItems: "center",
            boxShadow: "0 0px 30px #dedede",
            // mixBlendMode: "multiply",
            // boxShadow: "0 0 3px #999797  ",
            borderRadius: 0,
          }}
        >
          <Box
            sx={{
              m: 2,
              height: "100%",
              minHeight: "100px",
              minWidth: { xs: "110px", sm: "auto" },

              alignItems: { xs: "center" },
              display: "flex",
              justifyContent: "center",
            }}
            component={Link}
            to={`/${item.itemId}`}
          >
            <CardMedia
              component="img"
              sx={{
                maxWidth: "100px",
                maxHeight: "100px",
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
              maxWidth: "75%",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "start", sm: "center" },
              justifyContent: { xs: "space-evenly", sm: "space-between" },
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
            <Box sx={{ height: "45px", maxWidth: "90%" }}>
              <Typography
                className="textOrverWrapLine2"
                variant="subtitle2"
                sx={{ color: "#A4A4A4" }}
              >
                {item.description}
              </Typography>
            </Box>

            <Typography
              fontWeight="600"
              variant="subtitle1"
              sx={{ color: "red" }}
            >
              ¥{item.price.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  });
};
const SearchCard = (props) => {
  return <>{searchCardDetail(props.items)}</>;
};
export default SearchCard;
