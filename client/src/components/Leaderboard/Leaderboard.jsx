import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import CategorySelector from './CategorySelector.jsx';
import LeaderboardTable from './LeaderboardTable.jsx';
import { LoadingError } from './LoadingError.jsx';
import { fetchLeaderboardData } from '../functions/LeadboardFunctions.jsx';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [selectedCategory, setSelectedCategory] =
        React.useState('highScoreFour');

    const categories = ['highScoreFour', 'highScoreEight'];

    useEffect(() => {
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
            <LoadingError isLoading={loading} error={error} />
            {!loading && !error && (
                <>
                    <CategorySelector
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <h2 className="leaderboard-title">Leaderboard</h2>
                    <LeaderboardTable data={leaderboardData} />
                </>
            )}
        </Box>
    );
};

export default Leaderboard;
