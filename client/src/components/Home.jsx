import 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook for navigating to different routes

    return (
        <Box className={'mainContainer'}>
            {' '}
            {/* Main container for the page layout */}
            {/* Button to navigate to the 'gamemodes' page */}
            <Button
                variant="contained"
                className={'mainButton'}
                onClick={() => navigate('/gamemodes')}
            >
                PLAY
            </Button>
            {/* Button to navigate to the 'tutorial' page */}
            <Button
                variant="contained"
                className={'mainButton'}
                onClick={() => navigate('/tutorial')}
            >
                TUTORIAL
            </Button>
            {/* Button to navigate to the 'leaderboard' page */}
            <Button
                variant="contained"
                className={'mainButton'}
                onClick={() => navigate('/leaderboard')}
            >
                Leaderboard
            </Button>
        </Box>
    );
};

export default Home;
