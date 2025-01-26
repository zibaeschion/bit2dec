import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GameModes = () => {
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
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Button
                    variant="contained"
                    sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                    onClick={() => navigate('/classicMode/4')}
                >
                    4-BIT
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                    onClick={() => navigate('/timeMode/4')}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <span>4-BIT</span>
                        <span style={{ fontSize: '1rem', marginTop: '-4px' }}>
                            TIME MODE
                        </span>
                    </Box>
                </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Button
                    variant="contained"
                    sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                    onClick={() => navigate('/classicMode/8')}
                >
                    8-BIT
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                    onClick={() => navigate('/timeMode/8')}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <span>8-BIT</span>
                        <span style={{ fontSize: '1rem', marginTop: '-4px' }}>
                            TIME MODE
                        </span>
                    </Box>
                </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Button
                    variant="contained"
                    sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                    onClick={() => navigate('/math/4')}
                >
                    MATH 4-BIT
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: '200px', height: '60px', fontSize: '1.5rem' }}
                    onClick={() => navigate('/math/8')}
                >
                    MATH 8-BIT
                </Button>
            </Box>
        </Box>
    );
};

export default GameModes;
