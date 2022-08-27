import { Typography } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Link } from "@mui/material";
import { MenuList } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const sidebarDetail = () => {
  return (
    <Grid sx={{ mt: 7 }}>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          カテゴリー
        </Typography>
        <MenuList sx={{ pr: 2 }}>
          <Link href="/search/1/null" underline="none">
            <MenuItem>
              <Typography color="GrayText" variant="subtitle2">
                食料品
              </Typography>
            </MenuItem>
          </Link>
          <Link href="/search/2/null" underline="none">
            <MenuItem>
              <Typography color="GrayText" variant="subtitle2">
                美容品
              </Typography>
            </MenuItem>
          </Link>
          <Link href="/search/3/null" underline="none">
            <MenuItem>
              <Typography color="GrayText" variant="subtitle2">
                雑貨
              </Typography>
            </MenuItem>
          </Link>
        </MenuList>
      </Box>
    </Grid>
  );
};
const SideBar = (props) => {
  return <>{sidebarDetail()}</>;
};
export default SideBar;
