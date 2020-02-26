import React from "react";
import { NavLink } from "react-router-dom";

const ativeStyle = {
  color: "palevioletred"
};

const Navigation = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={ativeStyle}>
          На главную
        </NavLink>
      </li>
      <li>
        <NavLink to="/content">Контент</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Профиль</NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
