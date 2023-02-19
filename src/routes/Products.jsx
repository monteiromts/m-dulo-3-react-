import React from 'react'
import styles from './Products.module.css'
import { Link } from "react-router-dom"
import CardProductsPrincipal from '../components/CardProductsPrincipal'
import SSD from '../components/img/ssd.png'
import Processador from '../components/img/processador.png'
import Memoria from '../components/img/memoria.png'
import PlacaMae from '../components/img/placa_mae.png'
import Fonte from '../components/img/fonte.png'
import PlacaDeVideo from '../components/img/placa_de_video.png'

const Products = () => {
  return (
    <div className={styles.container}>
          <Link style={{textDecoration: 'none'}} to="/ssd">
            <div className={styles.card}><img src={SSD} /><p>SSD/HD</p></div>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/memorias"><div className={styles.card}><img src={Memoria} /><p>Memória RAM</p></div></Link>
          <Link style={{textDecoration: 'none'}} to="/placa_mae"><div className={styles.card}><img src={PlacaMae} /><p>Placa-mãe</p></div></Link>
          <Link style={{textDecoration: 'none'}} to="/processadores"><div className={styles.card}><img src={Processador} /><p>Processador</p></div></Link>
          <Link style={{textDecoration: 'none'}} to="/fonte"><div className={styles.card}><img src={Fonte} /><p>Fonte de alimentação</p></div></Link>
          <Link style={{textDecoration: 'none'}} to="/placa_de_video"><div className={styles.card}><img src={PlacaDeVideo} /><p>Placa Gráfica</p></div></Link>
    </div>
  )
}

export default Products