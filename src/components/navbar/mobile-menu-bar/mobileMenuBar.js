import { Toolbar } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const MobileMenuDetail = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate(`/${value}`);
  //   }, [value]);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const handleNavigate = (newValue) => {
    console.log(newValue);
    if (newValue === "login" || newValue === "logout") {
    } else {
      navigate("/" + newValue);
    }
  };
  return (
    <Paper
      sx={{
        display: { xs: "block", sm: "none" },
        // position: "fixed",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: "50",
        bgcolor: "#e0f2f1",
      }}
      elevation={11}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // navigate("/" + newValue);
          handleNavigate(newValue);
        }}
      >
        <BottomNavigationAction label="ホーム" value="" icon={<HomeIcon />} />

        <BottomNavigationAction
          label="カート"
          value="cart"
          icon={<ShoppingCartIcon />}
        />
        {isAuthenticated === true ? (
          <BottomNavigationAction
            label="アカウント"
            value="account-detail"
            icon={<SettingsIcon />}
          />
        ) : (
          <BottomNavigationAction
            label="アカウント"
            value="login"
            onClick={isAuthenticated === false ? loginWithRedirect : null}
            // onClick={loginWithRedirect}
            icon={<AccountCircle />}
          />
        )}
        {isAuthenticated === true ? (
          <BottomNavigationAction
            label="ログアウト"
            onClick={logout}
            value="logout"
            icon={<LogoutIcon />}
          />
        ) : null}
      </BottomNavigation>
    </Paper>
  );
};
const MobileMenuBar = () => {
  return <>{MobileMenuDetail()}</>;
};
export default MobileMenuBar;
