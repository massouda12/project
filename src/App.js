import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Super/Superadmin/MainLayout";
import AuthPage from "./Auth";
import { routes } from "./Super/routes";
import { routesadmin } from "./Admin/routesAdmin";
import { routesuser } from "./User/routesUser";
import Mainadmin from "./Admin/Admin/MainLayout";
import SignUp from "./Sign-up";
import Mainuser from "./User/User/MainLayout";
import Addusers from "./Super/Pages/Adduser";
import Addjobs from "./Admin/Adminpages/Addjob";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path="/sign-up" element={<SignUp />}/>
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
