import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const checkBox = ({ label, disabled, ...otherProps }) => {
  return (
    <div className={`styled-checkbox ${disabled ? 'checkbox-disabled' : ''}`}>
      <label>
        <input type='checkbox' disabled={disabled} {...otherProps} />
        <span className='box'></span>
        {label}
      </label>
    </div>
  )
}

checkBox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool
}

export default checkBox
