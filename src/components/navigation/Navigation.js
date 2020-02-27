import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const ativeStyle = {
  color: "palevioletred"
};

const Navigation = () => (
  <div>
    <Menu compact>
      <Menu.Item>
        <NavLink to="/" exact activeStyle={ativeStyle}>
          На главную
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/content" activeStyle={ativeStyle}>
          Контент
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/profile" activeStyle={ativeStyle}>
          Профиль
        </NavLink>
      </Menu.Item>
    </Menu>
  </div>
);

export default Navigation;
