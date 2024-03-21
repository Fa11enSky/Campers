import React from "react";
import { NavLink } from "react-router-dom";
import css from './styels.module.css'
const NavList = () => {
  return (
    <ul className={css.headerNav}>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"catalog"}>Catalog</NavLink>
      </li>
      <li>
        <NavLink to={"favorites"}>Favorites</NavLink>
      </li>
    </ul>
  );
};

export default NavList;
