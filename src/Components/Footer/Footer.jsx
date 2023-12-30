/* eslint-disable react/jsx-no-target-blank */
import{useEffect} from 'react'
import logo from '../../assets/img7.png';
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {AiFillYoutube} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="footer">
      <div className="section container grid">
        <div  className="gridOne">
          <div data-aos='fade-down' data-aos-duration='2500' className="logoDiv flex">
            <img src={logo} className='Logo' />
          </div>
          <p data-aos='fade-down' data-aos-duration='3500'>Your mind should be stronger than feelings,fly! </p>
          <div data-aos='fade-up' data-aos-duration='2500' className="socialIcon flex">
          <TiSocialFacebook className='icon'/>
          <TiSocialInstagram className='icon'/>
          <TiSocialTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle"><b>Information</b></span>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Explore</a>
            </li>
            <li>
              <a href="">Flight Status</a>
            </li>
            <li>
              <a href="">Travel</a>
            </li>
            <li>
              <a href="">Check-In</a>
            </li>
            <li>
              <a href="">Manage your booking</a>
            </li>
        </div>

        <div data-aos='fade-down' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle"><b> Quick Guide</b></span>
            <li>
              <a href="">FQA</a>
            </li>
            <li>
              <a href="">HJow to</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Baggage</a>
            </li>
            <li>
              <a href="">Route Map</a>
            </li>
            <li>
              <a href="">Our communities</a>
            </li>
        </div>
        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle"><b>Information</b></span>
            <li>
              <a href="#">
                Chauffuer
              </a>
            </li>
            <li>
              <a href="#">Our partners</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Transportation</a>
            </li>
            <li>
              <a href="">Program Rules</a>
            </li>
        </div>
      </div>
      <div className="copyRightDiv flex">
        <p>
          Courtesy Design | Developed by <a href="https://github.com/herath98" target='_blank'>Harsha</a>
        </p>
      </div>
    </div>
  )
}

export default Footer