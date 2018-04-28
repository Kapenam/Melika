import React from 'react'
import PropTypes from 'prop-types';
import { MenuItems } from './const'
import './SideMenuBar.css'

const SideMenuBar = ({menuItems}) => (
  <div className="sideBarContainer">
    { menuItems.map(item => {
     return ( 
      <div className="menuItem">
          <a href={item.link}>
            {item.name}
          </a>
        </div>
      )
    })}
  </div>
)

SideMenuBar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
}

SideMenuBar.defaultProps = {
  menuItems: MenuItems,
}

export default SideMenuBar