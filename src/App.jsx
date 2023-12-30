import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginReg from './pages/auth/LoginReg';
import ResetPassword from './pages/auth/ResetPassword';
import SendPasswordResetEmail from './pages/auth/SendPasswordResetEmail';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Footer from './Components/Footer/Footer';
import Travelers from './Components/Travelers/Travelers';
import Info from './Components/Info/Info';
import Subscribers from './Components/Subscribers/Subscribers';
import Destination from './Components/Destination/Destination';
import ChangePassword from './pages/auth/ChangePassword';
import FlightBookingProfile from './pages/FlightBookingProfile';
import { useGetLoggedUserQuery } from './services/userAuthApi';
import { getToken } from './services/LocalStorageService';
import { setUserInfo } from './features/userSlice';
import img1 from './assets/img13.jpg'




function App() {
  const dispatch = useDispatch()
  const { access_token } = useSelector((state) => state.auth);


  const tokenObject = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(tokenObject.access_token);

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


  const user = {
    name: userData.name,
    avatar: img1,
    email: userData.email,
    memberSince: 'January 2022',
  };

  const bookings = [
    { date: '2023-01-15', departure: 'City A', arrival: 'City B' },
    { date: '2023-02-20', departure: 'City B', arrival: 'City C' },
    
  ];


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="login"
              element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />}
            />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />

            {/* Additional routes under Layout */}
            <Route path='FlightBookingProfile' element={<FlightBookingProfile user={user} bookings={bookings} />} />
            <Route path="info" element={<Info />} />
            <Route path="travelers" element={<Travelers />} />
            <Route path="subscribers" element={<Subscribers />} />
            <Route path="destination" element={<Destination />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>

          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>

      </BrowserRouter>
      <br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default App;
