import React from "react";
import { NavLink } from "react-router-dom";
import css from "./homePage.module.css";

const HomePage = () => (
  <div className={css.container}>
    <h3>Если Вы еще не авторизированы, пройдите по сссылке:</h3>
    <NavLink to="/login">Войти</NavLink>
  </div>
);

export default HomePage;
