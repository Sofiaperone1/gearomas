import React from 'react'
import logo1 from '../../Imgs/logo1.png'
import './Navbar.css'
import { useState } from 'react';
import {Link } from 'react-router-dom';
//import LocalMallIcon from '@mui/icons-material/LocalMall';



 const Navbar = () => {

  const [navbar, setNavbar] = useState (false);

const changeBackground = () => {
  if (window.scrollY >= 80 ) 
     {setNavbar(true)}

  else {setNavbar(false)}
}
window.addEventListener ('scroll', changeBackground);
  return (

 <div className={navbar ? 'nav-container active' : 'nav-container'}>
    <div className={navbar ? 'atentionHours active' : 'atentionHours'}> Nuestro horario de atencion es de 15 a 19 hs</div>
        <div className= {navbar ? 'navbar active' : 'navbar'} >

<img src={logo1} className= {navbar ? 'logo active' : 'logo'} alt='logoGea' />
       

<ul className='ul-navbar'>
  <li><Link style={{"textDecoration":"none"}} to="/" className="navlinks" >Home</Link></li>
  <li><Link  style={{"textDecoration":"none"}} to="/productos" className="navlinks" >Shop</Link></li>
  <li><Link  style={{"textDecoration":"none"}} to="/contact" className="navlinks" >Contact</Link></li>
  <li><Link  style={{"textDecoration":"none"}} to="/cartWidget" className="navlinks" >carrito</Link></li>              
</ul>

 </div>
    </div>
  )
} 




export default Navbar