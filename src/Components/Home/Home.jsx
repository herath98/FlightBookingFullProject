import { useEffect } from 'react'

import video from '../../assets/v5.mp4'
import planee from '../../assets/img2.png'
// import Search from '../Search/Search'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="home flex container">
      <div className='mainText'>
        <h5 className='ht'>TravelWings</h5>
        <h1 style={{fontWeight:800}} className='h1' data-aos='fade-up' data-aos-duration='2500'>Elevate Your Travel Experience: Find Your Flight Today!</h1>
      </div>
      <div style={{alignContent:'center'}}>
        <p>Welcome to FlyHub – Your Gateway to Global Adventures! At FlyHub,
           we are dedicated to transforming your travel aspirations into reality. 
           Our user-friendly platform ensures seamless flight bookings, unlocking a world of 
           possibilities with just a few clicks. Uncover unbeatable deals, explore new horizons, 
           and let your wanderlust take flight. We are not just a booking site; we are your travel companion, 
           committed to making every journey memorable. Join us on a journey where the sky is the starting point,
           and your dreams are the destination. FlyHub – Where Every Flight is an Adventure!</p>
      </div>
      <div className="homeImage flex">
        <div data-aos='fade-left' data-aos-duration='2500' className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img data-aos='fade-right' data-aos-duration='2500' src={planee} className='plane' />
      </div>
     <br /> <br /><br /><br /><br /><br /><br />

      
     
    </div>
    
  )
}

export default Home