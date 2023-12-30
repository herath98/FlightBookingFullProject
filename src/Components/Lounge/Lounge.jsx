import React,{useEffect} from 'react'
import imageGrid from '../../assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={imageGrid} />
        </div>
        <div data-aos='fade-right' data-aos-duration='2500' className="textDiv">
          <h2>Unaccopanied Minor Lounge</h2>
        </div>
        <div className="grids ">
          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className="gridTitle">
              Help through the airpot
            </span>
            <p>
              You can also call airlines forom your phone and book a flight ticket to one of your favorite 
              destination.
            </p>
          </div>
          <div data-aos='fade-down' data-aos-duration='3500' className="singleGrid" >
            <span className="gridTitle">
            Care on the flight
            </span>
            <p>
              You can also call airlines forom your phone and book a flight ticket to one of your favorite 
              destination.
            </p>
          </div>
          <div data-aos='fade-down' data-aos-duration='4500' className="singleGrid" >
            <span className="gridTitle">
            Chauffeur-drive service
            </span>
            <p>
              You can also call airlines forom your phone and book a flight ticket to one of your favorite 
              destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge