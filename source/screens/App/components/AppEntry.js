import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Logo from './Logo'
import { SideMenuBar } from '../components'
import { Home } from '../screens/Home'
import { UserProfile } from '../screens/UserProfile'
import { Jobs } from '../screens/Jobs'
import { Leads } from '../screens/Leads'
import { Materials } from '../screens/Materials'
import { Quotes } from '../screens/Quotes'
import { Vendors } from '../screens/Vendors'
import './AppEntry.css'

const AppEntry = () => (
  <div className="AppEntry">
    <div className="AppEntry-Menu">
      <Logo className="AppEntry-Logo" />
      <SideMenuBar />
    </div>
    <div className="AppEntry-Body">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/materials" component={Materials} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/vendors" component={Vendors} />
        </Switch>
      </Router>
    </div>
  </div>
)

export default AppEntry
