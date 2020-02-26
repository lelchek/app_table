import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logOut } from "../../redux/actions";

const ProfilePage = ({ authorisation, user, logOut }) => {
  return (
    <div>
      {!authorisation && <Redirect to="/login" />}
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <button type="submit" onClick={logOut}>
        Выйти
      </button>
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
