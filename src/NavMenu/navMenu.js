import React, { PureComponent } from 'react'
import classNames from 'classnames'
import theme from './navMenu.css'

export default class NavMenu extends PureComponent {
    render() {
        return (
            <div className={theme}>
                <a href=''>Home</a>
                <a href=''>Leads</a>
                <a href=''>Quotes</a>
                <a href=''>Jobs</a>
                <a href=''>Materials</a>
                <a href=''>Venders</a>
            </div>
        )
    }
}