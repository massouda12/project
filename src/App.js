import {  BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Super/Superadmin/MainLayout";
import AuthPage from "./Auth";
import UserDetails from "./userDetails";
import { routes } from "./Super/routes";
import { routesadmin } from "./Admin/routesAdmin";
import { routesuser } from "./User/routesUser";
import Mainadmin from "./Admin/Admin/MainLayout";
import SignUp from "./Sign-up";
import Mainuser from "./User/User/MainLayout";
import Addusers from "./Super/Pages/Adduser";
import Addjobs from "./Admin/Adminpages/Addjob";
import UpdateUser from "./Super/Pages/updateUser";
import JobDetails from "./User/Userpages/JobDetails";
function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <BrowserRouter>
      <Routes>
      <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <AuthPage />}
          />
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="/updateUSer" element={<UpdateUser/>} />
        <Route path="/jobDetails" element={<JobDetails/>} />
        <Route path="/main" element={<MainLayout />}>
          {routes}
        </Route>
        <Route path="/main/addusers" element={<Addusers/>} />
        <Route path="/admin" element={<Mainadmin />}>
          {routesadmin}
        </Route>
        <Route path="/admin/addjobs" element={<Addjobs/>} />
        <Route path="/user" element={<Mainuser />}>
          {routesuser}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
