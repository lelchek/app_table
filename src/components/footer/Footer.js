import React from "react";
import { NavLink } from "react-router-dom";
import css from "./footer.module.css";

const ativeStyle = {
  color: "palevioletred"
};
const style = {
  color: "white"
};

const Footer = () => (
  <div className={css.container}>
    <ul className={css.navigation}>
      <li>
        <NavLink to="/" exact style={style} activeStyle={ativeStyle}>
          На главную
        </NavLink>
      </li>
      <li>
        <NavLink to="/content" style={style} activeStyle={ativeStyle}>
          Контент
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" style={style} activeStyle={ativeStyle}>
          Профиль
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Footer;
