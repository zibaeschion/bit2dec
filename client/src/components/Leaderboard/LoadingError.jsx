import { Box, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

export const LoadingError = ({ isLoading, error }) => {
    if (isLoading) {
        return (
            <Box className="loading-container">
                <CircularProgress color="inherit" />
                <p className="loading-text">Loading data...</p>
            </Box>
        );
    }

    if (error) {
        return (
            <Box className="error-container">
                <p className="error-text">Error: {error}</p>
            </Box>
        );
    }

    return null;
};

