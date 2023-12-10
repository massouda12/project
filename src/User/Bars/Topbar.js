import { AppBar, Toolbar, Typography } from "@mui/material";
import colorUser from "../Configuser/colorConfigs";
import sizeConfigs from "../Configuser/sizeConfigs";
import HomeIcon from '@atlaskit/icon/glyph/home';
import LogoutIcon from '@mui/icons-material/Logout';
const logOut = () => {
  window.localStorage.clear();
  window.location.href = "/";
};
const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% +${sizeConfigs.sidebar.width})`,
        paddingTop:"10px",
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorUser.topbar.bg,
        color: colorUser.topbar.color
      }}
    >
      <Toolbar>
      <Typography align="right">
      <HomeIcon size="medium"/> 
        </Typography>
        <Typography  fontSize="40px" textAlign="center" paddingLeft="30px">
         Job Offer
        </Typography>
        <Typography  paddingLeft="1200px">
        <LogoutIcon onClick={logOut} /> 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;