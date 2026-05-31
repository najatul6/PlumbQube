import { useState } from "react";

import {
  FaTachometerAlt,
  FaHome,
  FaHistory,
  FaFileAlt,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import QuickActions from "./QuickActions";

const menus = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    active: true,
  },
  {
    title: "My Properties",
    icon: <FaHome />,
  },
  {
    title: "Service History",
    icon: <FaHistory />,
  },
  {
    title: "Documents",
    icon: <FaFileAlt />,
  },
  {
    title: "Account Settings",
    icon: <FaCog />,
  },
];

const DashboardSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* mobile sidebar open button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-1002 bg-primary-200 text-white w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center"
      >
        <FaBars />
      </button>

      {/* overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-1000 lg:hidden"
        />
      )}

      {/* sidebar */}
      <aside
        className={`
          fixed top-18 left-0 z-1001
          w-70 h-[calc(100vh-72px)]
          bg-white border-r border-gray-200
          transition-all duration-300
          overflow-y-auto
          flex flex-col justify-between
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div>
          {/* mobile top */}
          <div className="flex items-center justify-between p-6 lg:hidden border-b border-gray-200">
            <h2 className="text-2xl font-bold text-primary-200">
              Dashboard
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-xl text-gray-700"
            >
              <FaTimes />
            </button>
          </div>

          {/* menu items */}
          <div className="p-6 space-y-3">
            {menus.map((menu, idx) => (
              <button
                key={idx}
                className={`w-full flex items-center gap-4 px-5 py-4 text-left rounded-lg transition-all duration-300 ${
                  menu.active
                    ? "bg-primary-200/10 text-primary-200"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <span className="text-lg">
                  {menu.icon}
                </span>

                <span className="font-medium">
                  {menu.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* quick actions */}
        <div className="p-6 border-t border-gray-200">
          <QuickActions />
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;