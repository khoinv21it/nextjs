import styles from "./Button.module.css";
import React from 'react'

const Button = ( {lableOnClick} ) => {
  return (
    <button className={`${styles.btn}`}>More..</button>
  )
}

export default Button
