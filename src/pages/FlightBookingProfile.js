// FlightBookingProfile.js
import React from 'react';
import { Avatar, Typography, Paper, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Button, CssBaseline } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';

const FlightBookingProfile = ({ user, bookings }) => {

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

 
    
   

    // Store User Data in Redux Store
    useEffect(() => {
        if (data && isSuccess) {
            dispatch(setUserInfo({
                email: data.email,
                name: data.name
            }))
        }
    }, [data, isSuccess, dispatch])

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Avatar alt={user.name} src={user.avatar} sx={{ width: 100, height: 100 }} />
                </Grid>
            </Grid>
            <Typography variant="h5" align="center" gutterBottom>
                {user.name}
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
                Email: {user.email}
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" paragraph>
                Member since: {user.memberSince}
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Booking History
            </Typography>
            <List>
                {bookings.map((booking, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`Flight ${index + 1}`}
                            secondary={`Date: ${booking.date} | Departure: ${booking.departure} | Arrival: ${booking.arrival}`}
                        />
                    </ListItem>
                ))}
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    // height="1vh"  // Optional: This ensures the Grid takes the full height of the viewport
                >
                    <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>
                        Logout
                    </Button>
                </Grid>
            </List>

        </Paper>
    );
};

export default FlightBookingProfile;
