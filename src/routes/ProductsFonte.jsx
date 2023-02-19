import { useState, useEffect } from 'react'

import styles from './ProductsSSD.module.css'
import CardProducts from '../components/CardProducts'

const ProductsFonte = () => {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {

    fetch('https://apiresishop.onrender.com/Fontes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) =>resp.json())
      .then((data) => {
        console.log(data)
        setProdutos(data)
      })
      .catch((err) => console.log(err))

  }, [])





  return (
    <div className={styles.container}>
        {produtos.length > 0 &&
         produtos.map((produtos) => (
          <CardProducts
          id={produtos.id}
          foto={produtos.foto}
          nome={produtos.nome}
          modelo={produtos.modelo}
          marca={produtos.marca}
          capacidade={produtos.capacidade}
          preco={produtos.preco}
            />
         ))}
    </div>
  )
}

export default ProductsFonte