import React from 'react'
import './cartWidget.css'
import WidgetForm from '../../components/Forms/WidgetForm';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import mastercardIcon from "../../Imgs/mastercardIcon.png"
import visaIcon from "../../Imgs/visaIcon.png"
import otherCardIcon from "../../Imgs/otherCardIcon.png"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
//import Visibility from '@mui/icons-material/Visibility';
//import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2'

const Checkout = () => {


        const [showPassword, setShowPassword] = React.useState(false);
        
        const handleClickShowPassword = () => setShowPassword((show) => !show);
        
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
        
        const showTerms = () => {
          Swal.fire({
            title: 'Terms and Conditions',
            html:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum sequi, ipsum tempora quod laudantium cupiditate eaque repudiandae voluptas qui saepe molestias ducimus itaque veritatis accusantium consequuntur delectus, est sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum sequi, ipsum tempora quod laudantium cupiditate eaque repudiandae voluptas qui saepe molestias ducimus itaque veritatis accusantium consequuntur delectus, est sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum sequi, ipsum tempora quod laudantium cupiditate eaque repudiandae voluptas qui saepe molestias ducimus itaque veritatis accusantium consequuntur delectus, est sit',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
     
        return (
        <div className='checkout'>
        <div className='themeBars'>
            <h1>CHECK OUT</h1>
        </div>     
        
        <div className='widgetCont'>
        
        <WidgetForm/>
        
        <div className='ticket'>
        
        <h3>ORDER OPTIONS</h3>
        <Divider />
        <div className='giftOption'>
          <div>
          <Checkbox /> <h5>Giftbox - ( <span>$5</span> )</h5> 
          </div>
          <p>Choose this option to have your order packaged in a gift box. Otherwise, your order will arrive in a brown box</p>
          </div>
        
        
        <h3 className='orderDetails'>ORDER DETAILS</h3>
        <Divider />
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shipping</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$250</td>
                </tr>
              </tbody>
            </table>
        
        
            <div className='cardInput'>
            <div className='cardNumber'>
            <div className='credCards'>
                <img src={visaIcon} alt="visaIcon" />
                <img src={mastercardIcon} alt="mastercardIcon" />
                <img src={otherCardIcon} alt="mastercardIcon" />
            </div>
                  <TextField
                  label="Number"
                  type="number"
                />
        
            </div>
            <div>
                <FormControl  style={{width:"94%"}} sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">MM / YY</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    
                    endAdornment={
                      <InputAdornment position="end">
                      
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
          
                <FormControl style={{width:"94%", marginTop:"0"}} sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
        
              </div>
              </div>
        
        
            <div className='giftOption'>
              <div>
              <Checkbox/> <h5>I have read and agree to the <button onClick={showTerms}>TERMS AND CONDITIONS</button></h5> 
              </div>
            </div>
           
        
        </div>
        </div>
        </div>
          );
        }
        


export default Checkout 