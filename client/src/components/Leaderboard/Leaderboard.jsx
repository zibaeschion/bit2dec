import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import CategorySelector from './CategorySelector.jsx';
import LeaderboardTable from './LeaderboardTable.jsx';
import { LoadingError } from './LoadingError.jsx';
import { fetchLeaderboardData } from '../functions/LeadboardFunctions.jsx';

const Leaderboard = () => {
    // State to store leaderboard data
    const [leaderboardData, setLeaderboardData] = React.useState([]);

    // State to track loading status
    const [loading, setLoading] = React.useState(true);

    // State to store any error messages
    const [error, setError] = React.useState(null);

    // State to store the selected category for the leaderboard
    const [selectedCategory, setSelectedCategory] =
        React.useState('highScoreFour');

    // List of available categories for the leaderboard
    const categories = ['highScoreFour', 'highScoreEight'];

    useEffect(() => {
        // Call the fetchLeaderboardData function to get leaderboard data for the selected category
        fetchLeaderboardData(
            selectedCategory,
            setLoading,
            setError,
            setLeaderboardData
        )
            .then((r) => {})
            .catch();
    }, [selectedCategory]);

    return (
        <Box className="leaderboard-container">
            {/* Show loading and error messages */}
            <LoadingError isLoading={loading} error={error} />

            {/* Only render leaderboard if not loading and no error */}
            {!loading && !error && (
                <>
                    {/* Category selector to switch between different leaderboard categories */}
                    <CategorySelector
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onChange={setSelectedCategory} // Update the selected category
                    />
                    {/* Title of the leaderboard */}
                    <h2 className="leaderboard-title">Leaderboard</h2>

                    {/* Table to display the leaderboard data */}
                    <LeaderboardTable data={leaderboardData} />
                </>
            )}
        </Box>
    );
};

export default Leaderboard;
