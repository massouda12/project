import HomePage from "../Pages/home/HomePage";
import { RouteType } from "./config";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Startup from "../Pages/installation/Startup";
import Usersuperadmin from "../Pages/documentation/Usersuperadmin";
import PeopleIcon from '@mui/icons-material/People';
const appRoutes: RouteType[] = [
  {
    path:"/main",
    element: <Usersuperadmin />,
    state: "Users",
    sidebarProps: {
      displayText: "Users",
      icon: <PeopleIcon />
    }
  },
  {
    path: "/main/startUp",
    element: <Startup />,
    state: "StartUp",
    sidebarProps: {
      displayText: "StartUps",
      icon: <ApartmentIcon />
    },
  },
 
  
];

export default appRoutes;