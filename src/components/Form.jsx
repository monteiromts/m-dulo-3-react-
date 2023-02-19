import React, { useState } from 'react'
import styles from "./Form.module.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const validationPost = yup.object().shape({
  nome: yup.string().required("Insira o seu nome").min(3, "Insira eu nome correto"),
  email: yup.string().required("Insira o seu email de contato"),
  comentario: yup.string().required("Faça seu comentário nos avaliando")
})




const Form = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationPost)
  })

  const addPost = data => axios.post("https://apiresishop.onrender.com/posts", data)
  .then(() => {
      navigate('/comentarios', {message: 'Comentario criado!'})
  }).catch(() => {
      console.log("deu errado")
  })


  return (
    <div className={styles.container}>
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
        </form>
    </div>
  )
}

export default Form
