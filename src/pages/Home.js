import { Grid } from "@mui/material";
import { useState, useEffect } from 'react'

import video from '../assets/v5.mp4'
import planee from '../assets/img2.png'
import '../main.css'
import '../index.css'
// import Search from '../Search/Search'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Add logic to handle subscription (e.g., send email to server)
    console.log(`Subscribed with email: ${email}`);
    // You can reset the email input after submission
    setEmail('');
  };

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="home flex container">
        <div style={{marginTop:'-2rem'}} className='mainText'>
          <h5 className='ht'>TravelWings</h5>
          <h1 style={{ fontWeight: 800 }} data-aos='fade-up' data-aos-duration='2500'>Elevate Your Travel Experience: Find Your Flight Today!</h1>
        </div>
        <div style={{ alignContent: 'center' }}>
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
      </div>
      <div className="subscribers section">
        <div className="sectionContainer container">
          <h2 data-aos='fade-left' data-aos-duration='2500'>Subscribe Newsletters & get Latest News</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSubscribe(); }}>
            <div data-aos='fade-up' data-aos-duration='2500' className="inputDiv">
              <input
                className='text'
                type="text"
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className='btn'>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Home