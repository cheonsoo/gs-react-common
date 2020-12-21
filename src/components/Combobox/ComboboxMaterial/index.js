import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'

import './style.scss'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    minWidth: '120px',
    maxWidth: '120px',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '8px 16px 8px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0)
  },
  small: {
    width: '100px',
    minWidth: '50px',
    maxWidth: '100px',
    '& > div > div': {
      width: '100px',
      minWidth: '50px',
      maxWidth: '100px',
      fontSize: '12px'
    }
  },
  big: {
    width: '100px',
    minWidth: '50px',
    maxWidth: '100px',
    '& > div > div': {
      width: '100px',
      minWidth: '50px',
      maxWidth: '100px',
      fontSize: '12px'
    }
  }
}))

const showLabel = false

function Combobox(props) {
  const classes = useStyles()

  const [selected, setSelected] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(props.comboboxItems)
    if (props.selectedKey) {
      setSelected(props.selectedKey)
    } else {
      setSelected('')
    }
  }, [props.comboboxItems, props.selectedKey])

  const handleChange = (evt) => {
    const val = evt.currentTarget.dataset.val
    const name = evt.currentTarget.dataset.name
    setSelected(val)
    if (props.onSelect) props.onSelect({ key: val, value: name })
  }

  const handleBlur = (evt) => {
    if (props.onBlur) props.onBlur(evt)
  }

  return (
    <div>
      <FormControl className={`${classes.margin} ${classes[props.size]}`}>
        {showLabel && (
          <InputLabel id='demo-customized-select-label'>Age</InputLabel>
        )}
        <Select
          labelId='demo-customized-select-label'
          id='demo-customized-select'
          value={items.length > 0 ? selected : ''}
          onChange={handleChange}
          onBlur={handleBlur}
          input={<BootstrapInput />}
          disabled={props.disabled}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {items.map((item, idx) => (
            <MenuItem
              key={`${item.key}-${idx}`}
              value={item.key}
              data-val={item.key}
              data-name={item.value}
            >
              {item.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

Combobox.propTypes = {
  title: PropTypes.string,
  selectedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSelect: PropTypes.func,
  onBlur: PropTypes.func,
  comboboxItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.string
}

export default Combobox
