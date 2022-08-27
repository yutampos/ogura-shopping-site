import AccountCircle from "@mui/icons-material/AccountCircle";
import EggIcon from "@mui/icons-material/Egg";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import * as React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Input } from "@mui/material";

import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

export default function PrimarySearchAppBar() {
  // const count = JSON.stringify(cart); useSelector((state) => state.count);
  const [searchName, setSearchName] = React.useState(null);
  const [searchId, setSearchId] = React.useState(0);
  const onInput = (e) => {
    setSearchName(e);
  };
  const handleChange = (e) => {
    setSearchId(e.target.value);
  };

  const countData = useSelector((state) => state.cartReducer.count);

  // const countSumData = () => {
  //   let countSum;
  //   for (let i = 0; i < countData.length; i++) {
  //     countSum += countData.qty.indexOf[i];
  //   }
  //   return countSum;
  // };
  let totalCartCount = countData.reduce(function (sum, element) {
    return sum + element.quantity;
  }, 0);

  // countData.map((q) => {
  //   return q.qty;
  // });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
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
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          color: "#e0f2f1",
          backgroundColor: "#0a0f42",
          height: "50px",
        }}
        sx={{ boxShadow: 0 }}
      >
        <Toolbar>
          <Button
            noWrap
            component={Link}
            to="/"
            sx={{ color: "white", display: { xs: "none", sm: "block" } }}
            style={{
              display: "flex",
              alignItems: "center",
              height: "50px",
            }}
          >
            <img
              src="https://i.gyazo.com/8c5b15e836930f63e455cc3214ffa8f0.png"
              alt=""
              style={{ width: "auto", height: "100%" }}
            />
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Search
            sx={{ pl: 1 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FormControl variant="standard">
              {/* ディスプレイエンプティを使う際、初期値を設定してあげる必要がある（valueのこと）！！ */}
              <Select
                onChange={handleChange}
                displayEmpty
                value={searchId}
                sx={{ color: "white" }}
                disableUnderline
              >
                <MenuItem value={0}>すべて</MenuItem>
                <MenuItem value={1}>食料品</MenuItem>
                <MenuItem value={2}>美容品</MenuItem>
                <MenuItem value={3}>雑貨</MenuItem>
              </Select>
            </FormControl>
            <Input
              disableUnderline
              sx={{ color: "white" }}
              onInput={(event) => onInput(event.target.value)}
            ></Input>
            <Link to={`/search/${searchId}/${searchName}`}>
              <Button>
                <SearchIcon sx={{ color: "white" }} />
              </Button>
            </Link>

            {/* <StyledInputBase
              sx={{ color: "inherit" }}
              placeholder="商品名を入力してください"
              onInput={(event) => onInput(event.target.value)}
            />
            <Link to={`/search/${searchId}/${searchName}`}>
              <Button>検索</Button>
            </Link> */}
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button color="secondary">問い合わせ</Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Badge badgeContent={totalCartCount} color="error">
              <IconButton variant="link" href="/cart">
                <ShoppingCartIcon sx={{ color: "white" }} />
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
                  }}
                  src={user.picture}
                  alt={user.name}
                />
              ) : (
                <AccountCircle />
              )}

              {/* {user.picture} */}
              {/* {isAuthenticated && <img src={user.picture} alt={user.name} />} */}
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
