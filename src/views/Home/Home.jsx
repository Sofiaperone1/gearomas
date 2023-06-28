import React ,{useEffect}from 'react'
//import Banner from "../../components/Home/Banner"
//import MeetUs from "../../components/Home/meetUs"
//import FollowUs from "../../components/Home/followUs"
//import OtherLinks from "../../components/Home/otherLinks"
//import HomeProds from '../../components/Home/HomeProds'

import AOS from "aos";
import 'aos/dist/aos.css'
import "./Home.css"

const Home = () => {

  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

  return (
    <div className='HomeView'>
{/*  <Banner/>
  <div className='themeBarHome'>
       <h1>HOME</h1>
    </div>
   <MeetUs />
   <HomeProds/> 
   <OtherLinks/>
  
  
   <FollowUs/> */}
 
    </div>
  )
}

export default Home