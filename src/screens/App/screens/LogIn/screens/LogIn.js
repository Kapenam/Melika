import React, { Component } from 'react'
import './LogIn.css'

export default class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      userEmail: '',
      userPassword: '', 
    }
  }
  render() {
    return (
      <div className="container">
        <div className="leftContainer">
          <h1>Log In</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(event, newValue) => this.setState({ userEmail: newValue })}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(event, newValue) => this.setState({ userPassword: newValue })}
          />
          <div className="rememberMe">
            <input id="rememberMe" type="checkbox"/>
            <label>Remember Me</label>
          </div> 
          <div className="logIn">
            <input type="submit" value="Log In" className="LogInButton"/>
            <input type="text" value="Forgot Password" />
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
