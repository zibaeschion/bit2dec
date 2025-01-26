import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GameModes = () => {
    const navigate = useNavigate(); // Hook to navigate between pages

    return (
        <Box className={'mainContainer'}>
            {' '}
            {/* Main container for the layout */}
            {/* Game Mode Button for 4-BIT Classic Mode */}
            <Box className={'mainButtonContainer'}>
                <Button
                    variant="contained"
                    className={'mainButton'}
                    onClick={() => navigate('/classicMode/4')}
                >
                    4-BIT
                </Button>
                {/* Game Mode Button for 4-BIT Time Mode */}
                <Button
                    variant="contained"
                    className={'mainButton'}
                    onClick={() => navigate('/timeMode/4')}
                >
                    <Box className={'withinGameModeButton'}>
                        <span>4-BIT</span>
                        <span style={{ fontSize: '1rem', marginTop: '-4px' }}>
                            TIME MODE
                        </span>
                    </Box>
                </Button>
            </Box>
            {/* Game Mode Button for 8-BIT Classic Mode */}
            <Box className={'mainButtonContainer'}>
                <Button
                    variant="contained"
                    className={'mainButton'}
                    onClick={() => navigate('/classicMode/8')}
                >
                    8-BIT
                </Button>
                {/* Game Mode Button for 8-BIT Time Mode */}
                <Button
                    variant="contained"
                    className={'mainButton'}
                    onClick={() => navigate('/timeMode/8')}
                >
                    <Box className={'withinGameModeButton'}>
                        <span>8-BIT</span>
                        <span style={{ fontSize: '1rem', marginTop: '-4px' }}>
                            TIME MODE
                        </span>
                    </Box>
                </Button>
            </Box>
            {/* Game Mode Button for Math-based 4-BIT and 8-BIT Modes */}
            <Box className={'mainButtonContainer'}>
                <Button
                    variant="contained"
                    className={'mainButton'}
                    onClick={() => navigate('/math/4')}
                >
                    MATH 4-BIT
                </Button>
                <Button
                    variant="contained"
                    className={'mainButton'}
                    onClick={() => navigate('/math/8')}
                >
                    MATH 8-BIT
                </Button>
            </Box>
        </Box>
    );
};

export default GameModes;
