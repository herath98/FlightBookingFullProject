import {useEffect} from 'react'
import travel from '../../assets/img11.jpg'
import tpic from '../../assets/img12.jpg'
import tpic2 from '../../assets/img14.jpg'
import tpic3 from '../../assets/img18.jpg'
import tpic4 from '../../assets/img19.jpg'
import tpic5 from '../../assets/img20.jpg'
import travel2 from '../../assets/img13.jpg'
import travel3 from '../../assets/img15.jpg'
import travel4 from '../../assets/img16.jpg'
import travel5 from '../../assets/img17.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [{
  id: 1,
  destinationImage: travel,
  travelerImage: tpic,
  travelerName: 'harsha',
  socialLink: '@harsha57'
},
{
  id: 2,
  destinationImage: travel2,
  travelerImage: tpic2,
  travelerName: 'natasha',
  socialLink: '@natashy8'
},
{
  id: 3,
  destinationImage: travel3,
  travelerImage: tpic3,
  travelerName: 'morgan',
  socialLink: '@mora86'
},
{
  id: 4,
  destinationImage: travel4,
  travelerImage: tpic4,
  travelerName: 'michel',
  socialLink: '@michel'
},
{
  id: 5,
  destinationImage: travel5,
  travelerImage: tpic5,
  travelerName: 'micky',
  socialLink: '@micy55'
}
]



const Travelers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="travel">
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top Travelers of this month!
        </h2>
        <div data-aos='fade-up' data-aos-duration='2500' className="travelersCaotainer grid">
          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className='destinationImage' />
                  <div className="travelerDetails">
                    <div className="travelPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers