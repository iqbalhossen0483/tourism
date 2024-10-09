import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Firebase/useAuth";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const { user, LogOut } = useAuth();

  const screenChanged = () => {
    if (window.innerWidth < 480) setShowNav(false);
    else setShowNav(true);
  };

  window.addEventListener("resize", screenChanged);

  return (
    <>
      <div className={`mobile-header`}>
        <i
          onClick={() => setShowNav((prev) => !prev)}
          className='fas fa-bars'
        ></i>
      </div>
      <div className={`header-container ${showNav ? "flex" : "hidden"} `}>
        <i
          onClick={() => setShowNav(false)}
          className='closebtn fas fa-times'
        />

        <div className='menus'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/services'>Places</NavLink>
          <NavLink to='/blogs'>Blogs</NavLink>
          {user.email && <NavLink to='/add-blog'>Add blog</NavLink>}
        </div>
        <div className='menus'>
          {user.email && (
            <div className='menus'>
              <NavLink to='/my-order'>My orders</NavLink>
              <img
                className='w-7 h-7 rounded-full ml-3'
                src={user.photoURL || "/no-photo.png"}
                alt=''
              />
            </div>
          )}
          {!user.email ? (
            <NavLink to='/sign-in'>Account</NavLink>
          ) : (
            <button onClick={LogOut}>
              <i className='fas fa-sign-out-alt text-xl opacity-50'></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
