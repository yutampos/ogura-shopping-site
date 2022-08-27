import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { AppBar } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { Input } from "@mui/material";
import { TextField } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Search from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { Paper } from "@mui/material";
import { bgcolor } from "@mui/system";
import AccountCircle from "@mui/icons-material/AccountCircle";

import MoreIcon from "@mui/icons-material/MoreVert";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SelectUnstyled from "@mui/base/SelectUnstyled";
import { Badge } from "@mui/material";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Menu } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import MobileMenuBar from "./mobile-menu-bar/mobileMenuBar";
import { Typography } from "@mui/material";

const menuItem = [
  {
    value: 0,
    name: "全て",
  },
  {
    value: 1,
    name: "食料品",
  },
  {
    value: 2,
    name: "美容品",
  },
  {
    value: 3,
    name: "雑貨",
  },
];

const NavbarDetail = () => {
  const [searchId, setSearchId] = useState(0);

  const [searchName, setSearchName] = useState("null");
  const onInput = (e) => {
    setSearchName(e);
  };
  const handleChange = (e) => {
    setSearchId(e.target.value);
  };

  const cartData = useSelector((state) => state.cartReducer.count);

  const totalCartCount = () => {
    return cartData.reduce(function (sum, element) {
      // console.log(element);
      return sum + element.quantity;
    }, 0);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ mt: 3 }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuthenticated === true ? (
        <div>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/shopping-history"
          >
            注文履歴
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/account-detail"
          >
            マイアカウント
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              logout({ returnTo: window.location.origin });
            }}
          >
            ログアウト
          </MenuItem>
        </div>
      ) : (
        <MenuItem
          onClick={() => {
            loginWithRedirect();
            handleMenuClose();
          }}
          // component={Link}
          // to="/sign-in"
        >
          {" "}
          ログイン
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Toolbar
      sx={{ position: "fixed" }}
      // anchorEl={mobileMoreAnchorEl}
      // anchorOrigin={{
      //   vertical: "bottom",
      //   horizontal: "right",
      // }}
      // id={mobileMenuId}
      // keepMounted
      // transformOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
      // open={isMobileMenuOpen}
      // onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>カート</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Toolbar>
  );

  return (
    <Grid>
      <AppBar
        sx={{
          boxShadow: "0 0px 15x black",

          backgroundColor: "#eee8ea",
          // background:
          // "linear-gradient(90deg, rgba(235, 235, 235, 1), rgba(221, 221, 221, 1))",
        }}
      >
        <Toolbar
          style={{
            minHeight: "45px",
            // color: "#e0f2f1",
            // backgroundColor: "rgba(34,38,84,0.1)",
            backgroundColor: "transparent",
          }}
        >
          <Grid container>
            <Grid item md={1} xl={2}></Grid>
            <Grid
              item
              xs={12}
              md={10}
              xl={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // px: 20,
              }}
            >
              <Box>
                <Button
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    height: "45px",
                  }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{
                      paddingRight: "5px",
                      // paddingLeft: "10px",
                      // backgroundColor: "rgba(10,15,66,0.1)",
                      borderRadius: "13px",
                      width: "auto",
                      height: "100%",
                      border: "5px",
                      borderColor: "white",
                    }}
                  />
                  <Typography
                    fontSize="20px"
                    fontWeight="bold"
                    sx={{ color: "gray" }}
                  >
                    OGURA
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Paper
                elevation={0}
                sx={{
                  pl: 1,
                  bgcolor: "white",
                  borderRadius: 3,

                  display: "flex",
                  width: "300px",
                  boxShadow: "0 0px 19px #e0e0e0",
                }}
              >
                <Select
                  variant="standard"
                  onChange={handleChange}
                  // displayEmpty
                  value={searchId}
                  disableUnderline
                  sx={{
                    color: "gray",
                  }}
                >
                  {menuItem.map((item) => (
                    <MenuItem key={item.name} children value={item.value}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                <Input
                  disableUnderline
                  sx={{
                    height: "100%",
                    width: "100%",
                    color: "GrayText",
                  }}
                  onInput={(event) => onInput(event.target.value)}
                ></Input>
                <Link to={`/search/${searchId}/${searchName}`}>
                  <Button size="small">
                    <SearchIcon
                      sx={{
                        color: "gray",
                      }}
                    />
                  </Button>
                </Link>
              </Paper>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", sm: "flex" }, height: "25px" }}>
                <Badge badgeContent={totalCartCount()} color="warning">
                  <IconButton variant="link" href="/cart">
                    <ShoppingCartIcon sx={{ color: "gray" }} />
                  </IconButton>
                </Badge>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {isAuthenticated === true ? (
                    <img
                      style={{
                        width: "26px",
                        height: "auto",
                        borderRadius: "50%",
                        fontSize: "3px",
                      }}
                      src={user.picture}
                      alt={user.name}
                    />
                  ) : (
                    <AccountCircle sx={{ color: "gray" }} />
                  )}
                </IconButton>
              </Box>
            </Grid>
            <Grid item md={1} xl={2}></Grid>
          </Grid>

          <Grid sx={{ height: "45px" }}></Grid>

          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Grid>
  );
};

const Navbar = () => {
  return <Grid>{NavbarDetail()}</Grid>;
};
export default Navbar;
