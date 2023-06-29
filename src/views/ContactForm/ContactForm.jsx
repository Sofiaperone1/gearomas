import Form from "../../components/Forms/ContactForm.jsx"
import React from "react";
import "./ContactForm.css"
import Divider from '@mui/material/Divider';
import Sucursales from './Sucursales.js'
import Map from "../../components/map.jsx"

const ContactForm  = () => {
 /* const label = { inputProps: { 'aria-label': 'Checkbox demo' } };  */
  
 

  return (
   <div className="contactView">

    <div className='themeBars'>
    <h1>CONTACT US </h1>
 </div>   
 <div className="contactFormBlock" >   
    <div>
    
    <h1>NUESTRAS SUCURSALES:</h1>
    <Divider />
    <div className="branchOfficesInfo">
    <Sucursales/>
    </div>
    </div>
    <div className="mapContainer">
     <Map/> 
    </div>
    
    </div>
            <Form/>
   </div>

                  
               
  ) };

export default ContactForm;

