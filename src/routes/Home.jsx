import { useState, useEffect, useRef} from 'react'
import React from 'react'

import { motion } from 'framer-motion'
import style from './H.css'

import image2 from '../images/Carnaval de Ofertas 02.jpg'
import image1 from '../images/ofertas.png'
import image3 from '../images/Hype.png'



const images = [image1,image3,image2]



function Home() {
  const carousel = useRef();
  const [Width, setWidth] = useState(0)


useEffect(() =>{
  console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
},[])


  return (
    <div className={style.container}>

      <motion.div className="carousel" whilleTap={{cursor: "grabbing"}}>
        <motion.div className="inner"
        drag='x'
        dragConstraints={{ right: 0, left: -Width}}
        initial={{ x:1000}}
        animate={{ x:0 }}
        transition={{ duration: 1.0 }}
        >

        {images.map(image => (
          <motion.div className="item" key={image}>
            <img src={image} alt="texto alt"/>
          </motion.div>
        ))}
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Home