import { useEffect } from 'react'
import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck } from 'react-icons/bs'
import { BsBookmarkCheck } from 'react-icons/bs'

import Support from '../Support/Support'
import Lounge from '../Lounge/Lounge'

import Aos from 'aos'
import 'aos/dist/aos.css'

const info = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos='fade-right' data-aos-duration='2500'>Travel to make all around the world</h2>
          <button data-aos='fade-left' data-aos-duration='2500' className="btn">
            View All
          </button>
        </div>
        <div className="cardsDiv grid">
          <div data-aos='fade-left' data-aos-duration='2500' className="singleCard grid">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phne and book a flight
              ticket
            </p>
          </div>
          <div data-aos='fade-left' data-aos-duration='3500' className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon' />
            </div>
            <span className="cardTitle">Save More</span>
            <p>You can also call airlines from your phne and book a flight
              ticket
            </p>
          </div>
          <div data-aos='fade-left' data-aos-duration='4500' className="singleCard grid">
            <div className="iconDiv colorTwo">
              <BsBookmarkCheck className='icon' />
            </div>
            <span className="cardTitle">smart Checklist</span>
            <p>You can also call airlines from your phne and book a flight
              ticket
            </p>
          </div>
        </div>
      </div>
      <Support />
      <Lounge />
    </div>
  )
}

export default info