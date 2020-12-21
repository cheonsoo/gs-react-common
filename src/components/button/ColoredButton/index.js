import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const ColorButton = withStyles((theme) => ({
  root: _color
}))(Button)

let _color = ''

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0)
  }
}))

// export default function CustomizedButtons({ label, style, on }) {
export default function CustomizedButtons(props) {
  const classes = useStyles()

  _color = props.style || {
    color: '#fff',
    backgroundColor: '#0062ff',
    '&:hover': {
      backgroundColor: '#0062ff'
    }
  }

  return (
    <ColorButton variant='contained' className={classes.margin} {...props}>
      {props.label || ''}
    </ColorButton>
  )
}
