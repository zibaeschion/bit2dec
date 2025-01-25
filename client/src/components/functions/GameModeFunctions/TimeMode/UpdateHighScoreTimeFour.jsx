import {getHighScoreFour, updateHighScoreFour} from "../../APIFunctions.jsx";

export const updateHighScoreTimeFour = async (username, newScore) => {
    try {
        const currentHighScore = await getHighScoreFour(username);
        (currentHighScore.highScoreFour < newScore)
            ? await updateHighScoreFour(username, newScore)
            : "";

    }
    catch (err) {
        console.log(err.message);
    }
};