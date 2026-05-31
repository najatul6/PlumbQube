import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Portal",
      path: "/portal",
    },
  ];

  // onblur handler to close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-200">
            PlumberQube
          </h1>
        </div>

        {/* desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 text-[16px] font-medium transition-all duration-300
                ${
                  isActive
                    ? "text-primary-200 after:w-full"
                    : "text-gray-700 hover:text-primary-200 after:w-0 hover:after:w-full"
                }
                after:absolute after:left-0 after:bottom-0
                after:h-0.5 after:bg-primary-200
                after:transition-all after:duration-300`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* desktop button */}
        <div className="hidden md:block">
          <Button btnName={"Request Service"} />
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-primary-200 transition"
        >
          {open ? <MdClose /> : <HiMenu />}
        </button>

        {/* mobile dropdown */}
        <div
          ref={menuRef}
          className={`absolute left-0 top-20 w-full md:hidden transition-all duration-300 origin-top ${
            open
              ? "opacity-100 visible scale-y-100"
              : "opacity-0 invisible scale-y-95"
          }`}
        >
          <div className="mx-4 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
            <div className="flex flex-col p-6 gap-1">
              {navItems.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-primary-200 text-white"
                        : "text-gray-700 hover:bg-primary-200 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="mt-4">
                <Button btnName={"Request Service"} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;