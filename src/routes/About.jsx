import React from 'react'
import styles from './About.module.css'
import Isadora from '../components/img/isadora.jpg'
import Alvaro from '../components/img/alvaro.jpg'
import Matheus from '../components/img/matheus.jpg'
import AnaBeatriz from '../components/img/ana_beatriz.jpg'
import Whatsapp from '../components/img/whatsapp.png'
import Linkedin from '../components/img/linkedin.png'
import Github from '../components/img/github.png'
import Discordis from '../components/img/discordia.png'
import Rafaela from '../components/img/rafaela.jpg'


const About = () => {
  return (
    <div className={styles.container_about}>
      <div className={styles.est}>
          <img src={Isadora} className={styles.foto} />

          <br />
          <p className={styles.nome}>Isadora, 25.</p>
          <br />
          <p>Gestora de Gente e Engajamento</p>
          <br />
          <div className={styles.rede}>
            <img src={Whatsapp}/>
            <img src={Linkedin}/>
            <img src={Github}/>
            <img src={Discordis}/>
          </div>
      </div>
      <div className={styles.est}>
        <img src={Alvaro} className={styles.foto} />
        <br />
          <p className={styles.nome}>Alvaro, 30.</p>
          <br />
          <p>Gestor de Conhecimento</p>
          <br />
          <div className={styles.rede}>
            <img src={Whatsapp}/>
            <img src={Linkedin}/>
            <img src={Github}/>
            <img src={Discordis}/>
          </div>
      </div>
      <div className={styles.est}>
        <img src={Matheus} className={styles.foto}/>
        <br />
          <p className={styles.nome}>Matheus, 21.</p>
          <br />
          <p>Co-facilitador</p>
          <br />
          <div className={styles.rede}>
            <img src={Whatsapp}/>
            <img src={Linkedin}/>
            <img src={Github}/>
            <img src={Discordis}/>
          </div>
      </div>
      <div className={styles.est}>
        <img src={AnaBeatriz} className={styles.foto}/>
        <br />
          <p className={styles.nome}>Ana Beatriz, 18.</p>
          <br />
          <p>Colaboradora II</p>
          <br />
          <div className={styles.rede}>
            <img src={Whatsapp}/>
            <img src={Linkedin}/>
            <img src={Github}/>
            <img src={Discordis}/>
          </div>
      </div>
      <div className={styles.est}>
        <img src={Rafaela} className={styles.foto}/>
        <br />
          <p className={styles.nome}>Rafaela, 26.</p>
          <br />
          <p>Colaboradora I</p>
          <br />
          <div className={styles.rede}>
            <img src={Whatsapp}/>
            <img src={Linkedin}/>
            <img src={Github}/>
            <img src={Discordis}/>
          </div>
      </div>
    </div>
  )
}

export default About