import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import SearchCard from "./searchCard";

const searchView = (items) => {
  return (
    <Grid sx={{}}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "center",
        }}
      >
        {items === null ? <></> : <SearchCard items={items} />}
      </Box>
    </Grid>
  );
};
const SearchView = (props) => {
  return <>{searchView(props.items)}</>;
};
export default SearchView;
