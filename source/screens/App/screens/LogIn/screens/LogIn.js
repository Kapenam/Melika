import React, { Component } from 'react'

import FormErrors from '../components/FormErrors'

import styles from './LogIn.css'

import AuthService from 'shared/utilities/authService'

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
    const { formErrors } = this.state
    let { emailValid, passwordValid } = this.state

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        formErrors.email = emailValid ? '' : ' is invalid'
        break
      case 'password':
        passwordValid = value.length >= 6
        formErrors.password = passwordValid ? '' : ' is too short'
        break
      default:
        break
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
    console.log('User has forgotten password') // eslint-disable-line
  }

  handleUserInput = e => {
    const { name, value } = e.target

    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  handleSubmit = async () => {
    const { email, password } = this.state
    await AuthService.handleLogin(email, password)
  }

  render() {
    const { formErrors, formValid, email, password } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h1>Log In</h1>
          <div className={styles.errorMessage}>
            <FormErrors formErrors={formErrors} />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleUserInput}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleUserInput}
          />
          <label htmlFor="rememberMe" className={styles.rememberMe}>
            <input
              value="1"
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
            />
            <span>Remember Me</span>
          </label>
          <div className={styles.logIn}>
            <button
              type="button"
              className={styles.LogInButton}
              onClick={this.handleSubmit}
              disabled={!formValid}
            >
              Log In
            </button>
            <button type="button" onClick={this.retrievePassword}>
              Forgot Password
            </button>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.photoText}>
            <p>Atlanta Porch and Patio</p>
            <h1>Customer Relationship Management</h1>
          </div>
        </div>
      </div>
    )
  }
}
