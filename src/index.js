import React from 'react'
import styles from './styles.module.css'
import InputSimple from './components/input/InputSimple'
import ProductClassification from './components/productClassification'
import MDID from './components/MDID'

const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component12311: {text}</div>
}

export { ExampleComponent, InputSimple, ProductClassification, MDID }
