import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import logo from '../assets/img7.png'
const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <div >
            <img alt="TravelWings Logo"
              style={{ height: '75px', width: 'auto' }} src={logo} className="Logo" />
          </div>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>TravelWings</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(25, 176, 236)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(25, 176, 236)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

          {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(25, 176, 236)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'rgb(25, 176, 236)' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>}



        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
