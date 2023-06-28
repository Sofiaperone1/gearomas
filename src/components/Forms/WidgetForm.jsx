import React , {useState} from 'react'
import "../../views/ContactForm/ContactForm.css"
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const WidgetForm = () => {

    const changeHandler = () => {
    } 

    const [form,setForm] = useState({
        name:"",
        lastname:"",
        phone:"",
        city:"",
        address:"",
        message:"",
        })
      
       
      
      const [errors, setErrors] = useState({
        name:"",
        lastname:"",
        phone:"",
        city:"",
        address:"",
        message:"",
      })
      

  return (

    <div className='formWidget'>
         <h3>
                BILLING & SHIPMENT DETAILS
            </h3>
            <Divider />
        <form >
  
  <div className='name'>
                    <div className='inputCont'>
                    <p>Your name *</p>
                    <TextField id="outlined-basic" variant="outlined"  />
                    </div>
                    
                    <div className='inputCont'>
                    <p>Your lastname *</p>
                    <TextField id="outlined-basic"  variant="outlined" />
                    </div>           
   </div>

   <div className='address'>
                    <div className='inputCont'>
                    <p>Your home address *</p>
                    
                    <TextField id="outlined-basic" variant="outlined"  />
                    </div>
                    
                   <div className='inputCont'>
                   <p>City *</p>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        >
                          <MenuItem value={10}>CABA</MenuItem>
                          <MenuItem value={20}>CORDOBA</MenuItem>
                          <MenuItem value={30}>TRES ARROYOS</MenuItem>
                    </Select>
                    
                   </div> 
                   
   </div>

   <div className='phone'>
                    <p>Phone number *</p>
                    <TextField
                    />
                    
   </div>
   <div className='message'>
                <p>Your message</p>
                <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}

    />
                    
   </div>


</form>
    </div>

  )
}


export default WidgetForm