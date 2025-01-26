import {
    getHighScoreEight,
    updateHighScoreEight,
} from '../../APIFunctions.jsx';

// Function to update the high score if the new score is higher than the current one
export const updateHighScoreTimeEight = async (username, newScore) => {
    try {
        // Fetch the current high score for the user
        const currentHighScore = await getHighScoreEight(username);

        currentHighScore.highScoreEight < newScore
            ? await updateHighScoreEight(username, newScore)
            : '';
    } catch (err) {
        console.log(err.message);
    }
};
