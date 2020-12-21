import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0)
    },
    '& .MuiFormLabel-root': {
      'line-height': '0'
    },
    '& .MuiOutlinedInput-root': {
      height: '38px',
      '& .MuiOutlinedInput-input': {
        padding: '0 0 0 5px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        // border: '0'
      }
    }
  },
  input: {
    height: '38px'
  }
}))

export default function InputMaterial(props) {
  const classes = useStyles()

  const handleChange = (evt) => {
    if (props.onChange) props.onChange(evt)
  }

  return (
    // <form className={classes.root} noValidate autoComplete="off">
    <div className={classes.root}>
      <TextField
        type={props.type ? props.type : 'text'}
        // className={classes.root}
        id={props.id ? props.id : 'outlined-password-input'}
        label={props.label ? props.label : ''}
        autoComplete='current-password'
        variant='outlined'
        onChange={handleChange}
        {...props}
      />
    </div>
    // </form>
  )
}

InputMaterial.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
}
