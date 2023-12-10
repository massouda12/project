import HomePage from "../Userpages/home/HomePage";
import { RouteType } from "./config";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Statistics from "../Userpages/Statistics/Statistics";
import HomeIcon from '@mui/icons-material/Home';
import Users from "../Userpages/documentation/Usersuperadmin";
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';

const userRoutes: RouteType[] = [
  {
    path:"/user/",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon />
    }
  },
  
  {
    path: "/user/Statistics",
    element: <Statistics />,
    state: "Statistics",
    sidebarProps: {
      displayText: "Statistics",
      icon: <AnalyticsIcon />
    },
  },
 
 

  
];

export default userRoutes;