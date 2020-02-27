import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { logOut } from "../../redux/actions";
import css from "./profilePage.module.css";

const ProfilePage = ({ authorisation, user, logOut }) => {
  return (
    <div className={css.container}>
      {!authorisation && <Redirect to="/login" />}
      <p>Имя: {user.name}</p>
      <p>Фамилия: {user.lastName}</p>
      <p>Телефон: {user.phone}</p>
      <Button primary type="submit" onClick={logOut}>
        Выйти
      </Button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    authorisation: state.authorisation,
    user: state.user
  };
};

const mapDispatchToProps = {
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
