import React from "react";
import Navigation from "../navigation/Navigation";
import css from "./header.module.css";

const Header = () => (
  <div className={css.header}>
    <Navigation />
  </div>
);

export default Header;
