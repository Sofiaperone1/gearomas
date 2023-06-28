import React ,{useEffect}from 'react'
//import InstagramIcon from '@mui/icons-material/Instagram';
import "../../views/Home/Home.css"
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import fu1 from '../../Imgs/fu1.1.png';
import fu2 from '../../Imgs/fu2.1.png';
import fu3 from '../../Imgs/fu3.1.png';
import fu4 from '../../Imgs/fu4.1.png';
import AOS from "aos";
import 'aos/dist/aos.css'

//reemplazar los import por algo mas funcional
//AGREGAR TARJETAS CON ANIMACION

 
const FollowUs = () => {

  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

  return (
  
    <div className='followUs'>

{/* <InstagramIcon  data-aos="fade-right"sx={{ fontSize: 45 }}/> */} 

<h1 data-aos="fade-right" > Encontranos en las redes</h1>

<Divider /> 

<h3><span>Seguinos en Facebook e Instagram </span>para ver nuestras ofertas diarias, nuevos productos y mucho mas!</h3>



<Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 2,
        width: 250,
        height: 250,
      },
    }}
> 
    <Paper data-aos="flip-left" elevation={3} > <img src={fu1} alt='followUs1' /> </Paper>
    <Paper data-aos="flip-left" elevation={3} > <img src={fu2} alt='followUs2' /> </Paper>
    <Paper data-aos="flip-left"elevation={3} > <img src={fu3} alt='followUs3' /> </Paper>
    <Paper data-aos="flip-left" elevation={3} > <img src={fu4} alt='followUs4' /> </Paper>
  </Box>
    
    </div>
  )
}

export default FollowUs 