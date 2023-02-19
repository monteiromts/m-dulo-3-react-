import { useNavigate, Link } from 'react-router-dom'
import React from 'react'
import styles from './Contact.module.css'
import Form from '../components/Form'

const Contact = () => {

  const navigate = useNavigate()

  function createPost(coment) {

      coment.cost = 0
      coment.services = []

      fetch('https://apiresishop.onrender.com/posts', {
        method: 'POST',
        header: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(coment),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          navigate('/comentarios', {message: 'Comentario criado!'})
        })
        .catch((err) => console.log(err))

  }

  return (
    <div className={styles.container}>
      <p className={styles.tittle}>Deixe aqui seu FeedBack, ele é muito importante para nós.</p>
      <br />
      <br />
      <br />
      <Form handleSubmit={createPost}/>
      <p className={styles.feedback}><Link style={{textDecoration: 'none', color: 'black'}} to="/comentarios">Ver FeedBack's</Link></p>
    </div>
  )
}

export default Contact