import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import AppEntry from '../components/AppEntry'
import { LogIn } from './LogIn'
import './App.css';

const App = (
  <div className="App">
    <div className="container">
      <Router>
        <Switch>
          <Route
            path="/login"
            component={LogIn}
          />
          <AppEntry />
        </Switch>
      </Router>
    </div>
  </div>
)

export default App;