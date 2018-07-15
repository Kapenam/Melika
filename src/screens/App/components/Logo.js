import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = ({className}) => (
  <Link className={
    classNames(
      'Logo',
      className,
    )
  } to="/">Melika</Link>
)

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
