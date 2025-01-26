import { Box, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';

// The LoadingError component receives two props: isLoading and error
export const LoadingError = ({ isLoading, error }) => {
    // If data is still loading, show a loading spinner and text
    if (isLoading) {
        return (
            <Box className="loading-container">
                {' '}
                {/* Container for the loading state */}
                <CircularProgress color="inherit" />{' '}
                {/* Circular loading spinner */}
                <p className="loading-text">Loading data...</p>{' '}
                {/* Text indicating that data is loading */}
            </Box>
        );
    }

    // If there is an error, display the error message
    if (error) {
        return (
            <Box className="error-container">
                <p className="error-text">Error: {error}</p>
            </Box>
        );
    }

    return null;
};

// Type checking for the props using PropTypes
LoadingError.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};
