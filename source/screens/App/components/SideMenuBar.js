import React from 'react'
import PropTypes from 'prop-types'
import Auth from 'shared/api/auth'
import { MenuItems } from '../shared/const'
import './SideMenuBar.css'

const SideMenuBar = ({ menuItems }) => {
  let newMenuItems = menuItems
  if (Auth.isAuthenticated) {
    newMenuItems = [...newMenuItems, { link: '/logout', name: 'Sign Out' }]
  }

  return (
    <ul className="sideBarContainer">
      {newMenuItems.map(item => (
        <li key={`menu-item-${item.name}`} className="menuItem">
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}

SideMenuBar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
}

SideMenuBar.defaultProps = {
  menuItems: MenuItems,
}

export default SideMenuBar
