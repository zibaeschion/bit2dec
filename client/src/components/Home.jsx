import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                gap: '1rem',
            }}
        >
            <Button
                variant="contained"
                sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                onClick={() => navigate('/gamemodes')}
            >
                PLAY
            </Button>
            <Button
                variant="contained"
                sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                onClick={() => navigate('/tutorial')}
            >
                TUTORIAL
            </Button>
            <Button
                variant="contained"
                sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                onClick={() => navigate('/leaderboard')}
            >
                Leaderboard
            </Button>
        </Box>
    );
};

export default Home;
