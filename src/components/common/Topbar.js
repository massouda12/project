import { AppBar, Icon, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../Super/configs/colorConfigs";
import sizeConfigs from "../../Super/configs/sizeConfigs";
import PersonIcon from '@atlaskit/icon/glyph/person'
import HomeIcon from '@atlaskit/icon/glyph/home'

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% +${sizeConfigs.sidebar.width})`,
        paddingTop:"10px",
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color
      }}
    >
      <Toolbar>
      <Typography align="right">
        <HomeIcon  size="medium"/>
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