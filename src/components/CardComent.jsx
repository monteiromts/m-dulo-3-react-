import React from 'react'
import styles from "./CardComent.module.css"
import SubmitButton from './form/SubmitButton'

const CardComent = ({id, nome, email, coment, handleRemove}) => {

    const remove = (e) => {
         e.preventDefault()
         handleRemove(id)
    }

  return (
    <div className={styles.container}>
        <p>Id: {id}</p>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Comentário: {coment}</p>
        <div>
        <button onclick={remove}>Excluir</button>
        <button onclick={remove}>Editar</button>
        </div>
        <br />
    </div>
  )
}

export default CardComent