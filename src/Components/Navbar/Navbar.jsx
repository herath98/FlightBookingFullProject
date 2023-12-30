import { useState } from 'react';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
// image import
import logo from '../../assets/img7.png';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../features/authSlice';
import { getToken, removeToken } from '../../services/LocalStorageService';



import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useEffect } from 'react';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';

const Navbar = () => {

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])

  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };

  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  const [noBg, addBg] = useState('navBarMenu');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg');
    } else {
      addBg('navBarTwo ');
    }
  };
  window.addEventListener('scroll', addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <Button color='warning' component={NavLink} to="/ChangePassword" style={({ isActive }) => {
            return { backgroundColor: isActive ? 'rgb(25, 176, 236)' : '' };
          }} sx={{ color: 'white', textTransform: 'none' }}>
            Change Password
          </Button>


          <Button color='warning' component={NavLink} to="/FlightBookingProfile" style={({ isActive }) => {
            return { backgroundColor: isActive ? 'rgb(25, 176, 236)' : '' };
          }}
            sx={{ color: 'white', textTransform: 'none' }}
          >
            Profile
          </Button>

          <Button color='warning' onClick={handleLogout}>Logout</Button>


        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="Logo" alt="Logo" />
        </div>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridR className="icon" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <Button onClick={removeNavBar} className="listIteam" component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }}
              sx={{ color: 'white', textTransform: 'none' }}>
              Home
            </Button>

            {/* <Link to="/Info">
              <li onClick={removeNavBar} className="listIteam">
                About
              </li>
            </Link> */}
            <Button onClick={removeNavBar} className="listIteam" component={NavLink} to='/Info' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }}
              sx={{ color: 'white', textTransform: 'none' }}>
              About
            </Button>
            {/* <Link to="/Travelers">
              <li onClick={removeNavBar} className="listIteam">
                Offers
              </li>
            </Link> */}
            <Button onClick={removeNavBar} className="listIteam" component={NavLink} to='/Travelers' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }}
              sx={{ color: 'white', textTransform: 'none' }}>
              Offers
            </Button>
            {/* <Link to="/Subscibers">
              <li onClick={removeNavBar} className="listIteam">
                Subscribers
              </li>
            </Link> */}
            {/* <Link to="/Destination">
              <li onClick={removeNavBar} className="listIteam">
                Destination
              </li>
            </Link> */}
            <Button onClick={removeNavBar} className="listIteam" component={NavLink} to='/Destination' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }}
              sx={{ color: 'white', textTransform: 'none' }}>
              Booking
            </Button>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
