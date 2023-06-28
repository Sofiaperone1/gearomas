import React from 'react'
import "./Footer.css"
import logoF from "../../Imgs/logoF.png"
import mastercardIcon from "../../Imgs/mastercardIcon.png"
import visaIcon from "../../Imgs/visaIcon.png"
import otherCardIcon from "../../Imgs/otherCardIcon.png"
/*import CSoonIcon from "../../Imgs/CSoonIcon.png"*/
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>

<img src={logoF} alt='logoGea' style={{"marginLeft":"15px"}} />
<div className='navF'>
  <ul>
  <li><Link style={{"color":"black","textDecoration":"none" }} to="/" className="navlinks" > <p>Home</p></Link></li>
  <li><Link style={{"color":"black","textDecoration":"none" }}  to="/productos" className="navlinks" ><p>Shop</p></Link></li>
  <li><Link style={{"color":"black","textDecoration":"none" }}  to="/contact" className="navlinks" ><p>Contact</p></Link></li>
  <li><Link style={{"color":"black","textDecoration":"none" }} to="/cartWidget" className="navlinks" ><p>Widget</p></Link></li>
  </ul>
</div>
{/* <img src={CSoonIcon} className="CSoonIcon" alt="CSoonIcon" />  */}   
<div className='direcciones'>

<div>
<h4>CABA</h4>
<p> ALEM 1546 </p>
<p> sucursalgea5@gmail.com </p>
<p> 0115478965 </p>
</div>

<div>
<h4> CORDOBA </h4>
<p> GARIBALDI 259 </p>
<p> sucursalgea4@gmail.com</p>
<p> 4875985647</p>
</div>

<div>
<h4>TRES ARROYOS </h4>
<p> CONSTITUCION 1658 </p>
<p> sucursalgea6@gmail.com</p>
<p> 284569654</p>
</div>
</div>




<div className='footerCardIcons'>
<img src={visaIcon} alt="visaIcon" />
<img src={mastercardIcon} alt="mastercardIcon" />
<img src={otherCardIcon} alt="mastercardIcon" />
</div>

    </div>
  )
}

export default Footer;