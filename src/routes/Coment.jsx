import { useState, useEffect } from 'react'
import CardComent from '../components/CardComent'
import React from 'react'
import styles from './Coment.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Coment = () => {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
          axios.get("https://apiresishop.onrender.com/posts")
          .then((response) => {
            setPosts(response.data)
          })
          .catch(() => {
            console.log("deu ruim")
          })
    }, [])


    function delatarPost(id) {
      axios.delete(`https://apiresishop.onrender.com/posts/${id}`)

      setPosts(posts.filter(post => post._id !== id ))

    }

  return (

    <div className={styles.container}>
      <h1>Comentários</h1>
      <br />  
      <div className={styles.content}>
      {posts.map((post, key) => {
        
        return (
            <div className={styles.card} key={key}>
            <p><b>Nome:</b> {post.nome}</p>
            <p><b>Email:</b> {post.email}</p>
            <p><b>Comentário:</b> {post.comentario}</p>
            <Link to={{pathname: `/editar/${post.id}`}}>
            <button>Editar</button></Link> 
            <button onClick={() => deletarPost(post._id)}>Excluir</button>
            </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default Coment