import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorAdmin from "../Configsadmin/colorConfigs";
import sizeConfigs from "../Configsadmin/sizeConfigs";
import Sidebar from "../Bars/Sidebar";
import Topbar from "../Bars/Topbar";

const Mainadmin = () => {
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
          height:"auto",
          backgroundColor: colorAdmin.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Mainadmin;