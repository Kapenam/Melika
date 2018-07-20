import React, { Component } from 'react'
import AuthService from 'shared/utilities/authService'
import FormErrors from '../components/FormErrors'
import './LogIn.css'

export default class LogIn extends Component {
  state = {
    email: '',
    password: '',
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false,
  }

  validateField = (fieldName, value) => {
    const fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break
      case 'password':
        passwordValid = value.length >= 6
        fieldValidationErrors.password = passwordValid ? '' : ' is too short'
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm,
    )
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    })
  }

  retrievePassword = () => {
    console.log('User has forgotten password')
  }

  handleUserInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value)
      },
    )
  }

  handleSubmit = async () => {
    const { email, password } = this.state
    await AuthService.handleLogin(email, password)
  }

  render() {
    return (
      <div className="container">
        <div className="leftContainer">
          <h1>Log In</h1>
          <div className="errorMessage">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleUserInput(e)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleUserInput(e)}
          />
          <label className="rememberMe">
            <input value="1" id="rememberMe" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <div className="logIn">
            <button
              className="LogInButton"
              onClick={this.handleSubmit}
              disabled={!this.state.formValid}
            >
              Log In
            </button>
            <button onClick={this.retrievePassword}>Forgot Password</button>
          </div>
        </div>
        <div className="rightContainer">
          <div className="photoText">
            <p>Atlanta Porch and Patio</p>
            <h1>Customer Relationship Management</h1>
          </div>
        </div>
      </div>
    )
  }
}
