import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import SearchMain from "./searchMain";

import SearchView from "./searchView";
import SideBar from "./sideBar";

const SearchViewAndSideBar = () => {
  return (
    <Grid container>
      <Grid item md={1} xl={2}></Grid>
      <Grid
        item
        xs={12}
        md={10}
        xl={8}
        sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
        flexDirection={{ md: "row", xs: "column" }}
      >
        {" "}
        <Grid
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <SideBar />
        </Grid>
        <SearchMain />
      </Grid>
      <Grid item md={1} xl={2}></Grid>
    </Grid>
  );
};
export default SearchViewAndSideBar;
