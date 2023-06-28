import React,{useEffect} from 'react'
import meetUs from '../../Imgs/meetUs4.png'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AOS from "aos";
import 'aos/dist/aos.css'
import "../../views/Home/Home.css"
const MeetUs = () => {

  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

  return (
    <div className='meetUs'data-aos="fade-right" data-aos-duration="900">
      <img src={meetUs}  alt='img-meetUs'/>
        <div className='meetUs-text'>
            <h2> Quienes somos? </h2>
            <Divider variant="middle" />
       <h4> GEA Tienda energetica es un proyecto autogestivo que surge después de un reset obligatorio, de tener que empezar de cero ya que todo lo previo a la pandemia '20 se esfumo en una abrir y cerrar de ojos. <br/>
        Surge ante la necesidad, pero también ante la inmensa curiosidad que habita en una mujer inquieta. <br/>
        Nace de la investigación de las hierbas y sus magias, de cómo utilizarlas y, sobre todo, de querer compartir lo aprendido. Cada producto de esta tienda contiene mi absoluta dedicación. <br/>
        Siempre con el respaldo de amigxs que me ayudan hacer esto cada vez más grande y eficiente. <br/>
        Bienvenidxs a GEA, gracias por elegirnos.
        </h4>
        <Button variant="contained"> Contactanos </Button>
        </div>
    </div>
   
  )
}

export default MeetUs