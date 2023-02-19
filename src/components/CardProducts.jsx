import React from 'react'
import styles from "./CardProducts.module.css"


const CardProducts = ({id, nome, preco, modelo, marca, capacidade, foto}) => {

  const funcao1 = () => {
    return alert ("Produto adicionado ao carrinho!");
  }


  return (
    <div className={styles.produto}>
      <div className={styles.foto}>
        <img src={foto} alt="" />
      </div>
      <div className={styles.info}>
      <h1>{nome}</h1>
      <p><b>Modelo:</b> {modelo}</p>
      <p><b>Marca:</b> {marca}</p>
      <p><b>Capacidade:</b> {capacidade}</p>
      <p className={styles.preco}>Valor: <b>R${preco}</b></p>
      </div>
      <div className={styles.botao_car} onClick={funcao1}>Adicionar ao carrinho</div>
    </div>

  )
}

export default CardProducts