import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorUser from "../Configuser/colorConfigs";
import sizeConfigs from "../Configuser/sizeConfigs";
import Sidebar from "../Bars/Sidebar";
import Topbar from "../Bars/Topbar";

const Mainuser = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorUser.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Mainuser;