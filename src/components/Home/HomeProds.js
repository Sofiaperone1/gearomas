import React,{useEffect} from 'react'
import "../../views/Home/Home.css"
import pd1 from "../../Imgs/pd1.jpg"
import pd2 from "../../Imgs/pd2.jpg"
import pd3 from "../../Imgs/pd3.jpg"
import pd4 from "../../Imgs/pd4.jpg"
import {Link} from "react-router-dom"
import AOS from "aos";
import 'aos/dist/aos.css'

const HomeProds = () => {
  return (
    <div className='homeProds'>
        
        <div >
            <div className='pd-right'>
                <div  data-aos="fade-down-right"  data-aos-duration="700" className='up'>
                    <img src={pd1} alt="img1" />
                    <img src={pd2} alt="img2" />
                </div>
                <div  data-aos="fade-up-right"  data-aos-duration="700" className='down'><img src={pd3} alt="img3" /></div>
            </div>

            <div className='pd-left'>
                <div className='top'>
                    <button > <Link to="/productos" style={{"textDecoration":"none", "color":"black"}}><p>VISITA NUESTRA TIENDA ONLINE</p></Link></button>
                    <p  data-aos="fade-down-left"  data-aos-duration="700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ex commodi veniam, possimus odit quae qui nisi provident explicabo suscipit, iure tenetur dolor impedit? Sequi omnis voluptate quia quidem explicabo.</p>
                </div>
                <div className='bottom'><img  data-aos="fade-up-left"  data-aos-duration="700" src={pd4} alt="img4" /></div>
            </div>
        </div>
    </div>
  )
}

export default HomeProds