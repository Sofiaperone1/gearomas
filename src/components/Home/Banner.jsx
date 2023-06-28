import React,{useEffect} from "react";
import "../../views/Home/Home.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AOS from "aos";
import 'aos/dist/aos.css'

const Banner = () => {
  

  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

    return (
     
    <div className="homeBackg">
      <h1 data-aos="zoom-in">Tienda energetica</h1>
      <h3 data-aos="zoom-in">Ecologica, Cruelty free, Basura cero </h3>
       <Stack spacing={2} direction="row">
        <Button variant="outlined"  data-aos-delay="400" data-aos="flip-left">Conoce nuestros productos</Button>
       </Stack>
    </div>
    
   
               
    ) };
  
  export default Banner;