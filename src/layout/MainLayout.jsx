import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-black bg-white">
      <Nav className="dark:bg-black bg-white"></Nav>
      <div className="container mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
