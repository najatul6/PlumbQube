import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="font-inter">
        {/* navbar section*/}
      <header>
        <Navbar />
      </header>
      {/* main section */}
      <main>
        <Outlet />
      </main>
      {/* footer section */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
