import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './TopNavBar.css'

const TopNavbar = ({ Router, userName, iconUrl }) => {
  const renderNavBar = (
    <div className={styles.TopNavBarContainer}>
      <input type="search" id="nav_search" placeholder="Search" />
      <div className={styles.userName}>
        <img src={iconUrl} alt="User Gravatar" />
        <div>{userName}</div>
      </div>
      <Link to="/logout">Sign Out </Link>
    </div>
  )

  if (Router) {
    return <Router>{renderNavBar}</Router>
  }

  return renderNavBar
}

TopNavbar.propTypes = {
  userName: PropTypes.string,
  iconUrl: PropTypes.string,
  Router: PropTypes.node,
}

TopNavbar.defaultProps = {
  iconUrl: 'assets/images/default-gravatar.png',
}

export default TopNavbar
