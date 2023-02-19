import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import React from 'react'

const NavBar = () => {
  return (
    <div className={styles.container_menu}>
    <h1 className={styles.titulo}>Resilia Shop</h1>
    <div className={styles.container_pesquisa}><input type="text" /><button>BUSCAR</button></div>
    <div className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/products">Produtos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/about">Empresa</Link>
                    </li>
                </ul>  
        </div>
        </div>
  )
}

export default NavBar