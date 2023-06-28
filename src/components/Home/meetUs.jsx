import React,{useEffect} from 'react'
import meetUs from '../../Imgs/meetUs4.png'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AOS from "aos";
import 'aos/dist/aos.css'
import "../../views/Home/Home.css"
const MeetUs = () => {

  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

  return (
    <div className='meetUs'data-aos="fade-right" data-aos-duration="900">
      <img src={meetUs}  alt='img-meetUs'/>
        <div className='meetUs-text'>
            <h2> Who are we? </h2>
            <Divider variant="middle" />
       <h4>GEA Energy Store is a self-management project that arises after a mandatory reset, from having to start from scratch since everything prior to the '20 pandemic disappeared in the blink of an eye. <br/>
        It arises from the need, but also from the immense curiosity that lives in a restless woman. <br/>
        It is born from the investigation of herbs and their magic, how to use them and, above all, from wanting to share what they have learned. Every product in this store contains my absolute dedication. <br/>
        Always with the support of friends who help me make this bigger and more efficient. <br/>
        Welcome to GEA, thank you for choosing us.
        </h4>
        <Button variant="contained"> Contact us </Button>
        </div>
    </div>
   
  )
}

export default MeetUs