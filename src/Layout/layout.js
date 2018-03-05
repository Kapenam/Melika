import React, { Component } from 'react'
import classNames from 'classnames'
import NavMenu from '../NavMenu/navMenu'
import theme from './layout.css'

export default class Layout extends Component {
    render () {
        return (
            <div className={theme}>
                <NavMenu /> 
            </div>
        )
    }
}