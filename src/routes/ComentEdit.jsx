import React, { useEffect, useState } from 'react'
import styles from "./ComentEdit.module.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom'

const validationPost = yup.object().shape({
  nome: yup.string().required("Insira o seu nome").min(3, "Insira eu nome correto"),
  email: yup.string().required("Insira o seu email de contato"),
  comentario: yup.string().required("Faça seu comentário nos avaliando")
})




const ComentEdit = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://apiresishop.onrender.com/posts/${id}`)
    .then((response) => {
      reset(response.data)
    })
  }, [])

  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(validationPost)
  })

  const addPost = data => axios.put(`https://apiresishop.onrender.com/posts/${id}`, data)
  .then(() => {
      navigate('/comentarios', {message: 'Comentario editado!'})
  }).catch(() => {
      console.log("deu errado")
  })


  return (
    <div className={styles.container}>
      <br />
      <div className={styles.container2}>
        <h1>Edite seu comentário</h1>
        <br />
        <br />  
        <form className={styles.formulario} onSubmit={handleSubmit(addPost)}>
            <label htmlFor="">Nome</label>
            <input type="text" text="Nome Completo" name="nome"{...register("nome")} placeholder="Insira o seu nome" />
            <p>{errors.nome?.message}</p>
            <br />
            <label htmlFor="">E-mail</label>
            <input type="email" text="E-mail" name="email"{...register("email")} placeholder="Insira o seu e-mail" />
            <p>{errors.email?.message}</p>
            <br />
            <label htmlFor="">Comentario</label>
            <textarea  type="text" text="Comentário" name="comentario"{...register("comentario")} placeholder="Insira o seu FeedBack"/>
            <p>{errors.comentario?.message}</p>
            <br />
            <button className={styles.btn} type="submit">Enviar</button>
            <br />
            <p className={styles.feedback}><Link style={{textDecoration: 'none', color: 'black'}} to="/comentarios">Ver FeedBack's</Link></p>
        </form>
        </div>
    </div>
  )
}

export default ComentEdit 
