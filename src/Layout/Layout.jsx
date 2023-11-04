import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Headroom from "react-headroom";

const Layout = () => {
  return (
    <div>
      <Headroom>
        <NavBar></NavBar>
      </Headroom>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
