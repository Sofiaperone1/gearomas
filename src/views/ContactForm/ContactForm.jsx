import Form from "../../components/Forms/ContactForm.jsx"
import React from "react";
import "./ContactForm.css"
//import Maps from "../../components/Maps.js";
import Divider from '@mui/material/Divider';
import Sucursales from './Sucursales.js'

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
 {/*  <Maps/> */}
    </div>
    
    </div>
            <Form/>
   </div>

                  
               
  ) };

export default ContactForm;

