import React, { Component } from 'react'
import NavMenu from './NavMenu'
import theme from './Layout.css'

export default class Layout extends Component {
  render() {
    return (
      <div className={theme}>
        <NavMenu />
      </div>
    )
  }
}
