import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../screens/Home/screens/Home'
import Jobs from '../screens/Jobs/screens/Jobs'
import Leads from '../screens/Leads/screens/Leads'
import Materials from '../screens/Materials/screens/Materials'
import Quotes from '../screens/Quotes/screens/Quotes'
import Vendors from '../screens/Vendors/screens/Vendors'

import Logo from './Logo'
import SideMenuBar from './SideMenuBar'
import TopNavBar from './TopNavBar'
import NotFound from './NotFound'
import styles from './AppEntry.css'

const AppEntry = () => (
  <div className={styles.AppEntry}>
    <TopNavBar className={styles.AppEntry_Nav} userName="Sol Elisha" />
    <Logo className={styles.AppEntry_Logo} />
    <SideMenuBar className={styles.AppEntry_Menu} />
    <div className={styles.AppEntry_Body}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/leads" component={Leads} />
        <Route path="/materials" component={Materials} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/vendors" component={Vendors} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default AppEntry
