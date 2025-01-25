import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Button, Dialog, DialogContent, Icon, Box} from '@mui/material';
import {useNavigate} from "react-router-dom";
import Login from "./Login.jsx";
import logo from "../assets/bit2dec.png";

const NavigationBar = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});

    const handleToggleOpen = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    return (
        <AppBar position="static" sx={{backgroundColor: '#333333',}}>
            <Toolbar>
                {/* Home Button */}
                <Button
                    to="/"
                    sx={{
                        color: 'white',
                        textTransform: 'none',
                    }}
                    onClick={() => navigate('/')}
                >
                    Home
                </Button>

                {/* Login Button */}
                <Button
                    sx={{
                        color: 'white',
                        textTransform: 'none',
                    }}
                    onClick={() => handleToggleOpen()}
                >
                    {user ? `Welcome, ${user.username}` : 'Login'}
                </Button>

                {/* Centered Title */}
                {/*<Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>*/}
                {/*    Bit2Dec*/}
                {/*</Typography>*/}
                <Box sx={{flexGrow: 1, textAlign: 'center'}}>
                    <img src={logo} alt={"bit2dec"} height="60"/>
                </Box>
                {/* Additional navigation options can be added here */}
            </Toolbar>
            <Dialog open={open} onClose={handleToggleOpen} maxWidth="sm"
                    PaperProps={{
                        sx:{backgroundColor: 'transparent',
                            backgroundBlendMode: "hue",
                            boxShadow: 'none',
                        }}}
            >
                <DialogContent
                    sx={{padding: '20px',
                        backgroundColor: '#333',
                        borderRadius: '20px',
                }}
                >
                    <Login
                        setUser = {setUser}
                        handleToggleOpen={handleToggleOpen}
                    />
                </DialogContent>
            </Dialog>
        </AppBar>

    );
};

export default NavigationBar;
