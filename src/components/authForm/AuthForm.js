import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logIn } from "../../redux/actions";

class AuthForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.validation(this.state.username, this.state.password);
    this.onResetForm();
  };
  validation = () => {
    if (
      this.state.username === this.props.usernameFromStore &&
      this.state.password === this.props.passwordFromStore
    ) {
      this.props.logIn();
    } else {
      alert("Имя пользователя или пароль введены неверно");
    }
  };

  onResetForm = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        {this.props.authorisation && <Redirect to="/profile" />}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Имя пользователя</label>
          <input
            required
            onChange={this.handleChange}
            type="text"
            name="username"
            value={username}
          />
          <label htmlFor="password"> Пароль </label>
          <input
            required
            onChange={this.handleChange}
            type="password"
            name="password"
            value={password}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Войти
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usernameFromStore: state.user.username,
    passwordFromStore: state.user.password,
    authorisation: state.authorisation
  };
};

const mapDispatchToProps = {
  logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
