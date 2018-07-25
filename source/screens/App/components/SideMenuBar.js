import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { MenuItems } from '../shared/const'

import styles from './SideMenuBar.css'

// TODO: add isActive class to the currently selected link
const SideMenuBar = ({ menuItems, Router }) => {
  const renderMenu = (
    <ul className={styles.sideBarContainer}>
      {menuItems.map(item => (
        <li key={`menu-item-${item.name}`} className={styles.menuItem}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )

  if (Router) {
    return <Router>{renderMenu}</Router>
  }

  return renderMenu
}

SideMenuBar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
  Router: PropTypes.node,
}

SideMenuBar.defaultProps = {
  menuItems: MenuItems,
}

export default SideMenuBar
