import React from 'react'
import logo1 from '../../Imgs/logo1.png'
import './Navbar.css'
import { useState } from 'react';
import {Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



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
    <div className={navbar ? 'atentionHours active' : 'atentionHours'}> Our office hours are from 3:00 p.m. to 7:00 p.m.</div>
        <div className= {navbar ? 'navbar active' : 'navbar'} >

<img src={logo1} className= {navbar ? 'logo active' : 'logo'} alt='logoGea' />
       

<ul className='ul-navbar'>
  <li><Link style={{"textDecoration":"none"}} to="/" className="navlinks" >Home</Link></li>
  <li><Link  style={{"textDecoration":"none"}} to="/productos" className="navlinks" >Shop</Link></li>
  <li><Link  style={{"textDecoration":"none"}} to="/contact" className="navlinks" >Contact</Link></li>
  <li><Link  style={{"textDecoration":"none"}} to="/cartWidget" className="navlinks" ><ShoppingCartIcon /></Link></li>              
</ul>

 </div>
    </div>
  )
} 




export default Navbar