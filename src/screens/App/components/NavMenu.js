import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import theme from './NavMenu.css'

export default class NavMenu extends PureComponent {
  render() {
    return (
      <nav>
        <ul className={theme}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/leads'>Leads</Link></li>
          <li><Link to='/quotes'>Quotes</Link></li>
          <li><Link to='/jobs'>Jobs</Link></li>
          <li><Link to='/materials'>Materials</Link></li>
          <li><Link to='/vendors'>Vendors</Link></li>
        </ul>
      </nav>
    )
  }
}
