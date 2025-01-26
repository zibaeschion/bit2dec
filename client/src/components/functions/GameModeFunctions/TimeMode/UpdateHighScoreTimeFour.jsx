import { getHighScoreFour, updateHighScoreFour } from '../../APIFunctions.jsx';

// Function to update the high score if the new score is higher than the current one
export const updateHighScoreTimeFour = async (username, newScore) => {
    try {
        // Fetch the current high score for the user
        const currentHighScore = await getHighScoreFour(username);
        currentHighScore.highScoreFour < newScore
            ? await updateHighScoreFour(username, newScore)
            : '';
    } catch (err) {
        console.log(err.message);
    }
};
