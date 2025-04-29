import React from "react";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router";
import logo from "../../assets/Logo/logo.jpg"

const Navbar: React.FC = () => {
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-sky-500">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <LuMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 border border-gray-600 rounded-box z-1 mt-3 w-48 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <img className="w-12 rounded-full" src={logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="activeNav flex text-white flex-row items-center gap-5 font-semibold">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
