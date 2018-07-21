import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppEntry from '../components/AppEntry'

import LogIn from './LogIn/screens/LogIn'
import styles from './AppScreen.css'

const AppScreen = () => (
  <div className={styles.App}>
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route path="/login" component={LogIn} />
          <AppEntry />
        </Switch>
      </Router>
    </div>
  </div>
)

export default AppScreen
