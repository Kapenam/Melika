import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Logo.css'

import AppLogo from 'assets/images/app-logo.png'

const Logo = ({ className }) => (
  <Link className={classNames(styles.Logo, className)} to="/">
    <img
      src={AppLogo}
      alt="Atlanta Porch and Patio"
      className={styles.client_logo}
    />
  </Link>
)

Logo.propTypes = {
  className: PropTypes.string,
}

Logo.defaultProps = {
  className: '',
}

export default Logo
