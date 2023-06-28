import React from 'react'
import contactForm from "../../Imgs/form.png";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';


const Form = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <div id='fondoForm'>
        <div className='formCardDecoration' >
            <h3>
                ADITIONAL INFORMATION
            </h3>
            <Divider />
            <p>
            Need to get in contact with us? Have questions?
            <br />
            <br />
            Please fill out the contact form or email us directly at info@detroitcookieco.com! We are here to assist you during normal business hours Monday through Friday.
            </p>
            <img src={contactForm} alt="imagen de contacto" />
        </div>
        <div className='formCard'>
        <form>
        <p>Your name (required)</p>
        <TextField id="outlined-basic" variant="outlined" />
        <p>Your email (required) </p>
        <TextField id="outlined-basic"  variant="outlined" />
        <p>Subject</p>
        <TextField id="outlined-basic" variant="outlined" />
        <p>Your message</p>
        <TextField
          id="outlined-multiline-static"

          multiline
          rows={4}

        />
      <div className='suscribeDiv'>
       <p>Suscribe to our weekly neewsletter </p> 
        <Checkbox {...label} />
      </div>
    
        <Button variant="contained">Submit</Button>
        </form>
        </div>
            
</div>

  ) }

export default Form;