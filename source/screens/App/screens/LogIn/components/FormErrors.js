import React from 'react'
import PropTypes from 'prop-types'

import styles from './FormErrors.css'

const FormErrors = ({ formErrors }) => {
  const keyString = i => `${i}-${Math.random()}`

  return (
    <div className={styles.formErrors}>
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <p key={keyString(i)}>
              {fieldName} {formErrors[fieldName]}
            </p>
          )
        }
        return ''
      })}
    </div>
  )
}

FormErrors.propTypes = {
  formErrors: PropTypes.object,
}

FormErrors.defaultProps = {
  formErrors: {},
}
