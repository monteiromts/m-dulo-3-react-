import React from 'react'
import styles from "./CardProductsPrincipal.module.css"

const CardProductsPrincipal = (foto) => {
  return (
    <div className={styles.produto}>
      <div className={styles.foto}>
        <img src={foto}/>
      </div>
    </div>
  )
}

export default CardProductsPrincipal