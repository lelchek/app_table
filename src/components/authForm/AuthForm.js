import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Notification } from "react-pnotify";
import { Button, Form } from "semantic-ui-react";
import { logIn } from "../../redux/actions";
import css from "./authForm.module.css";

class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    validForm: true
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      validForm: true
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
      this.setState({ validForm: false });
    }
  };

  onResetForm = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    const { username, password, validForm } = this.state;
    return (
      <div className={css.containerForm}>
        {!validForm && (
          <Notification
            type="error"
            title="Ошибка"
            text="Имя пользователя или пароль введены неверно"
            delay={2500}
            shadow={true}
            hide={true}
            nonblock={false}
            desktop={false}
          />
        )}
        {this.props.authorisation && <Redirect to="/profile" />}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor="username">Имя пользователя</label>
            <input
              required
              onChange={this.handleChange}
              type="text"
              name="username"
              value={username}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password"> Пароль </label>
            <input
              required
              onChange={this.handleChange}
              type="password"
              name="password"
              value={password}
            />
          </Form.Field>
          <Button primary type="submit">
            Войти
          </Button>
        </Form>
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
