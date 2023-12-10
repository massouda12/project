import { AppBar, Icon, Toolbar, Typography } from "@mui/material";
import colorAdmin from "../Configsadmin/colorConfigs";
import sizeConfigs from "../Configsadmin/sizeConfigs";
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
        backgroundColor: colorAdmin.topbar.bg,
        color: colorAdmin.topbar.color
      }}
    >
      <Toolbar>
      <Typography align="right">
       <HomeIcon/> 
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