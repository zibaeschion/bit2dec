import { collectLeaderboardData } from './APIFunctions.jsx';

export const fetchLeaderboardData = async (
    selectedCategory,
    setLoading,
    setError,
    setLeaderboardData
) => {
    setLoading(true);
    setError(null);
    try {
        const rawData = await collectLeaderboardData(selectedCategory); // Call Raw Data
        const formattedData = formatAndSortLeaderboardData(
            rawData,
            selectedCategory
        ); // Formate and Sort Raw Data
        setLeaderboardData(formattedData); // Formated Data becomes Data
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};

const formatAndSortLeaderboardData = (data, selectedLeaderboard) => {
    // Formating Data
    const formattedData = data.map((user) => ({
        accountName: user.username,
        points: user[selectedLeaderboard] || 0,
    }));

    formattedData.sort((a, b) => b.points - a.points);

    return formattedData;
};
