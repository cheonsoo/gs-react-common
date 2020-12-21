import React from 'react'
import PropTypes from 'prop-types'
import { IoIosSearch } from 'react-icons/io'
import './index.scss'

function SearchButton(props) {
  const handleClick = (evt) => {
    if (props.onClick) props.onClick(evt)
  }

  return (
    <button
      disabled={props.disabled}
      className='searchBtn'
      onClick={handleClick}
    >
      <IoIosSearch />
    </button>
  )
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default SearchButton
