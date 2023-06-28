
import React ,{useEffect}from 'react'
import icon1 from '../../Imgs/icon1.png'
import icon2 from '../../Imgs/icon2.png'
import icon3 from '../../Imgs/icon3.png'
import Divider from '@mui/material/Divider';
import fu4 from '../../Imgs/fu4.2.jpg';
import AOS from "aos";
import 'aos/dist/aos.css'
import "../../views/Home/Home.css"


const OtherLinks = () => {


  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

  return (
<div className='otherLinks'>
    <div className='firstContainer'>
         <div>
            <img src={icon1} alt='icon1' />
            <img src={icon2} alt='icon2' />
            <img src={icon3} alt='icon3' />
        </div>
        <h1>Other links of interest</h1>
        <Divider variant="middle" />
    </div>
    <div className='secondContainer'>
    <div className='firstLineC'>
            <div>
            <a href="https://veganexpedition.com/blogs/journal-blog/la-magia-que-esta-en-el-aire" >
  
                <h2 data-aos="fade-right" data-aos-duration="900">
                Inscense
                </h2>
                <h4 data-aos="fade-right" data-aos-duration="900">
                    ¿Why do we inscense?
                    <br/>
                    Spiritual meaning
                </h4>
            </a>
            </div>
            <div>
                <a href='https://www.bioguia.com/hogar/10-hierbas-para-sahumar-y-quitar-las-malas-vibras_81482340.html'>
                <h2 data-aos="fade-right" data-aos-duration="900">
                ¿What do we inscense width?
                </h2>
                <h4 data-aos="fade-right" data-aos-duration="900">
        
                    Learn how to use the different types of herbs to different goals
                </h4>
                </a>
             
            </div>
            <div>
                <a href="https://www.clarin.com/entremujeres/mexico/horoscopo/Limpia-energia-negativa-hogar-hierbas_0_r1A8X99t.html">
                <h2 data-aos="fade-right" data-aos-duration="900">
                How do we inscense?
                </h2>
                <h4 data-aos="fade-right" data-aos-duration="900">
              Protections to have in mind
                </h4>
                </a>
                
            </div>
    </div>
    <img className='imgRotativa' src={fu4} alt='img-rotativa' />
    <div className='secondLineC'>
            <div>
                <a href="https://es.wikipedia.org/wiki/Sahumadora">
                <h2 data-aos="fade-left" data-aos-duration="900">
                Story of the Inscense
                </h2>
                <h4 data-aos="fade-left" data-aos-duration="900">
                The origins , who did it and in what context 
                </h4>

                </a>
            </div>

            <div>
                <a href="https://es.wikipedia.org/wiki/Ecolog%C3%ADa_espiritual">

                <h2 data-aos="fade-left" data-aos-duration="900">
               Spiritual ecology
                </h2>
                <h4 data-aos="fade-left" data-aos-duration="900">
                A spiritual response to an ecological crisis.
                </h4>
                </a>

            </div>

            <div>
                <a href="https://mymodernmet.com/es/productos-ecologicos/">
                
                <h2 data-aos="fade-left" data-aos-duration="900">
                Ecological section
                </h2>
                <h4 data-aos="fade-left" data-aos-duration="900">
                20 ecological styled products to help saving the planet
                </h4>

                </a>
            </div>

    </div>
    </div>
</div>
  )
}

export default OtherLinks;

/*<div>
    <img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/70/000000/external-incense-sleep-photo3ideastudio-lineal-photo3ideastudio.png"/>
    <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/70/000000/external-leaf-ecology-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
    <img src="https://img.icons8.com/external-wanicon-solid-wanicon/65/000000/external-peace-world-humanitarian-day-wanicon-solid-wanicon.png"/>
    </div>   */