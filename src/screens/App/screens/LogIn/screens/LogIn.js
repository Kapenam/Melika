import React, { Component } from 'react';
import { USER_AUTH_TOKEN } from 'shared/const';
import history from 'shared/utilities/history';
import Auth from 'shared/api/Auth';
import FormErrors from '../components/FormErrors';
import './LogIn.css';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  validateField = (fieldName, value) => {
    let {
      formErrors,
      emailValid,
      passwordValid,
    } = this.state

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        formErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors,
        emailValid,
        passwordValid,
      },
      this.validateForm,
    )
  }

  validateForm = () => {
    const { emailValid, passwordValid } = this.state
    this.setState({
      formValid: emailValid && passwordValid,
    })
  }

  retrievePassword = () => {
    console.log('User has forgotten password')
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      },
    )
  }

  handleSubmit = async () => {
    // const { email, password } = this.state;

    // const result = await Auth.login({ email, password })
    // console.log('User Email Returned: ', result.email)

    // history.push('/')
    console.log('Auth: ', Auth)
    Auth.login
  }

  saveUserData = token => {
    localStorage.setItem(USER_AUTH_TOKEN, token)
  }

  render() {
    const {
      formErrors,
      email,
      password,
      formValid,
    } = this.state

    return (
      <div className="container">
        <div className="leftContainer">
          <h1>
            Log In
          </h1>
          <div className="errorMessage">
            <FormErrors formErrors={formErrors} />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => this.handleUserInput(e)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => this.handleUserInput(e)}
          />
          <label htmlFor="1" className="rememberMe">
            <input value="1" id="rememberMe" type="checkbox" />
            <span>
              Remember Me
            </span>
          </label>
          <div className="logIn">
            <button
              type="button"
              className="LogInButton"
              onClick={this.routeUser}
              disabled={!formValid}
            >
              Log In
            </button>
            <input type="button" value="Forgot Password" onClick={this.retrievePassword} />
          </div>
        </div>
        <div className="rightContainer">
          <div className="photoText">
            <p>
              Atlanta Porch and Patio
            </p>
            <h1>
              Customer Relationship Management
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
