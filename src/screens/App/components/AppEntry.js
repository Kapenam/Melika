import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Logo from './Logo'
import { Jobs } from '../screens/Jobs'
import { Leads } from '../screens/Leads'
import { Materials } from '../screens/Materials'
import { Quotes } from '../screens/Quotes'
import { UserProfile } from '../screens/UserProfile'
import { Vendors } from '../screens/Vendors'
import './AppEntry.css'

const AppEntry = () => (
  <div className="AppEntry">
    <div className="AppEntry-Menu">
      <Logo className="AppEntry-Logo" />
    </div>
    <div className="AppEntry-Body">
      <Router>
        <Switch>
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/materials" component={Materials} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/vendors" component={Vendors} />
        </Switch>
      </Router>
    </div>
  </div>

)

export default AppEntry
