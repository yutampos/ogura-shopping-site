import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import SearchMain from "../search-view/searchMain";
import TopBanner from "../top-banner/topBanner";
import SlidesView from "./slides-product-view/slidesView";
import ShieldIcon from "@mui/icons-material/Shield";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Paper } from "@mui/material";
import SideInfo from "./site-info/sideInfo";
import SideBar from "../search-view/sideBar";
import SearchViewAndSideBar from "../search-view/searchViewAndSideBar";
// import TopBanner from "./top-banner/topBanner";

const latestRegisteredProducts = "/item";
const foodProduct = "/search/1/null";
const cosmeticProduct = "/search/2/null";
const goodsProduct = "/search/3/null";

const TopPage = () => {
  return (
    <Grid>
      <Grid>{TopBanner()}</Grid>

      <Grid container>
        <Grid item md={1} xl={2}></Grid>
        <Grid item xs={12} md={10} xl={8}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
            }}
          >
            <Grid sx={{ width: "15%", display: { xs: "none", md: "block" } }}>
              <SideBar />
            </Grid>
            <Grid sx={{ width: "85%" }}>
              <Box sx={{ mt: 5, mx: 2 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  textAlign={{ xs: "center", sm: "left" }}
                >
                  新着商品
                </Typography>
              </Box>

              <Grid>{SlidesView(latestRegisteredProducts)}</Grid>
              <Box
                sx={{
                  mt: 3,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  食料品
                </Typography>
                <Typography sx={{ ml: 4 }} variant="subtitle1" color="gray">
                  鮮度抜群な食材たちが勢揃い！
                </Typography>
              </Box>
              <Grid>{SlidesView(foodProduct)}</Grid>
              <Box
                sx={{
                  mt: 3,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  化粧品
                </Typography>
                <Typography sx={{ ml: 4 }} variant="subtitle1" color="gray">
                  品質にこだわった化粧品をあなたに
                </Typography>
              </Box>
              <Grid>{SlidesView(cosmeticProduct)}</Grid>
              <Box
                sx={{
                  mt: 3,
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  雑貨
                </Typography>
                <Typography sx={{ ml: 4 }} variant="subtitle1" color="gray">
                  厳選されたOGURAならではの取り扱い商品がいっぱい！
                </Typography>
              </Box>
              <Grid>{SlidesView(goodsProduct)}</Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={1} xl={2}></Grid>
      </Grid>
      <Grid sx={{ mt: { xs: 2, sm: 1 } }}>
        {" "}
        {/* <SearchViewAndSideBar /> */}
      </Grid>
      <Grid container>
        <Grid item md={1} xl={2}></Grid>
        <Grid item xs={12} md={10} xl={8}>
          <Grid sx={{ display: "flex" }}>
            {" "}
            <Grid flexGrow={1}></Grid>
            <Grid sx={{ width: { xs: "100%", md: "90%" } }}>
              <SearchMain />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} xl={2}></Grid>
      </Grid>
    </Grid>
  );
};
export default TopPage;
