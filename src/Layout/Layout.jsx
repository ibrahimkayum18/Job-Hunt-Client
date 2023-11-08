import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Headroom from "react-headroom";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Headroom>
        <NavBar></NavBar>
      </Headroom>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
