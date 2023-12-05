import { RouteType } from "./config";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Statistics from "../Adminpages/Statistics/Statistics";
import ApartmentIcon from '@mui/icons-material/Apartment';
import Jobs from "../Adminpages/Jobs/Startup";
import Users from "../Adminpages/documentation/Usersuperadmin";
import PeopleIcon from '@mui/icons-material/People';

const adminRoutes: RouteType[] = [

  {
    path: "/admin/",
    element: <Jobs/>,
    state: "StartUp",
    sidebarProps: {
      displayText: "StartUps",
      icon: <ApartmentIcon />
    },
  },
  {
    path: "/admin/Statistics",
    element: <Statistics />,
    state: "Statistics",
    sidebarProps: {
      displayText: "Statistics",
      icon: <AnalyticsIcon />
    },
  },

];

export default adminRoutes;