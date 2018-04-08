import React, { Component } from 'react'
import classNames from 'classnames'
import NavMenu from '../NavMenu/NavMenu'
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
