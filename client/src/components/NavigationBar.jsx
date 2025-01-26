import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Dialog,
    DialogContent,
    Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Login from './Login.jsx';
import logo from '../assets/bit2dec.png';
import { useUser } from './UserContext';

const NavigationBar = () => {
    const navigate = useNavigate();
    const { username, setUsername } = useUser(); // Accessing the user context for username and setter
    const [open, setOpen] = useState(false); // State to control dialog visibility

    // Toggle dialog visibility
    const handleToggleOpen = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#333333' }}>
            <Toolbar>
                {/* Home Button */}
                <Button
                    to="/"
                    className={'navbarButtons'}
                    onClick={() => navigate('/')}
                >
                    Home
                </Button>

                {/* Login Button */}
                <Button
                    className={'navbarButtons'}
                    onClick={() => handleToggleOpen()}
                >
                    {username ? `Welcome, ${username}` : 'Login'}{' '}
                    {/* Display username if logged in */}
                </Button>

                {/* Logo */}
                <Box className={'navbarLogo'}>
                    <img src={logo} alt="bit2dec" height="60" />{' '}
                    {/* Display logo */}
                </Box>
            </Toolbar>

            {/* Dialog for Login */}
            <Dialog
                open={open}
                onClose={handleToggleOpen}
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        backgroundColor: 'transparent',
                        backgroundBlendMode: 'hue',
                        boxShadow: 'none',
                    },
                }}
            >
                <DialogContent className={'navbarDialog'}>
                    {/* Login component */}
                    <Login
                        setUser={setUsername}
                        handleToggleOpen={handleToggleOpen}
                    />
                </DialogContent>
            </Dialog>
        </AppBar>
    );
};

export default NavigationBar;
