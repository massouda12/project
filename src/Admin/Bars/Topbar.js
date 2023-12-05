import { AppBar, Icon, Toolbar, Typography } from "@mui/material";
import colorAdmin from "../Configsadmin/colorConfigs";
import sizeConfigs from "../Configsadmin/sizeConfigs";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@atlaskit/icon/glyph/home';

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
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;