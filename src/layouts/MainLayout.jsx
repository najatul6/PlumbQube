import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CallButton from "../components/common/CallButton";
import { useEffect, useState } from "react";
import Loader from "../components/common/Loader";

const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="font-inter">
      <header>
        <Navbar />
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {/*floating Call Button  */}
        <CallButton/>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;