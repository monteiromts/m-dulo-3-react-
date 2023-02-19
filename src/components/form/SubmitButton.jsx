import React from 'react'
import styles from './SubmitButton.module.css'

const SubmitButton = ({text}) => {
  return (
    <div className={styles.container}>
        <button className={styles.btn}>Enviar</button>
    </div>
  )
}

export default SubmitButton