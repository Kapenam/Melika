import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Auth from 'shared/api/auth'
import { MenuItems } from '../shared/const'
import './SideMenuBar.css'

const SideMenuBar = ({ menuItems, Router }) => {
  let newMenuItems = menuItems
  if (Auth.isAuthenticated) {
    newMenuItems = [...newMenuItems, { link: '/logout', name: 'Sign Out' }]
  }

  const renderMenu = (
    <ul className="sideBarContainer">
      {newMenuItems.map(item => (
        <li key={`menu-item-${item.name}`} className="menuItem">
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
