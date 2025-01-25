import {getHighScoreEight, updateHighScoreEight} from "../../APIFunctions.jsx";


export const updateHighScoreTimeEight = async (username, newScore) => {
    try {
        const currentHighScore = await getHighScoreEight(username);
        (currentHighScore.highScoreEight < newScore)
            ? await updateHighScoreEight(username, newScore)
            : "";

    }
    catch (err) {
        console.log(err.message);
    }
};