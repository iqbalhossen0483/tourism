import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

const Desboard = () => {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/admin") navigate("manage-orders");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (window.innerWidth < 480) setShowMenu(false);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 480) setShowMenu(true);
      else setShowMenu(false);
    });
  }, []);

  return (
    <div className='flex'>
      <div className='md:w-[260px] lg:w-[220px] relative'>
        <i
          onClick={() => setShowMenu((prev) => !prev)}
          className={`fas fa-angle-right arrow-icon ${
            showMenu ? "left-[189px] rotate-180" : "left-0"
          }`}
        />
        <div className={`admin-menu ${showMenu ? "flex" : "hidden"}`}>
          <NavLink to='manage-orders'>Manage Order</NavLink>
          <NavLink to='add-service'>Add Service</NavLink>
        </div>
      </div>
      <div className='min-h-screen flex flex-col justify-between w-full'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Desboard;
