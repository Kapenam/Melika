import React from 'react'

import LoginForm from '../containers/LoginForm'

import styles from './LogIn.css'

const Login = () => (
  <div className={styles.container}>
    <div className={styles.leftContainer}>
      <h1>Log In</h1>
      <LoginForm />
    </div>
    <div className={styles.rightContainer}>
      <div className={styles.photoText}>
        <p>Atlanta Porch and Patio</p>
        <h1>Customer Relationship Management</h1>
      </div>
    </div>
  </div>
)

export default Login
