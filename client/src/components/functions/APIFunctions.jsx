import axios from "axios";

export async function signUp(username, password) {
    axios.post("https://bit2dec.onrender.com/user/register", {username, password})
        .then(result => {})
        .catch(err => console.log(err));
}

export async function getHighScoreFour(username) {
    return await axios.post("https://bit2dec.onrender.com/user/getHighScoreFour/", {username})
        .then(result => {
            return result.data;
        })
        .catch()
}

export async function updateHighScoreFour(username, newHighScoreFour) {
     await axios.post("https://bit2dec.onrender.com/user/updateHighScoreFour", {username, newHighScoreFour}, )
         .then(result => {})
         .catch()
}

export async function getHighScoreEight(username) {
    return await axios.post("https://bit2dec.onrender.com/user/getHighScoreEight/", {username})
        .then(result => {
            return result.data;
        })
        .catch()
}

export async function updateHighScoreEight(username, newHighScoreEight) {
    await axios.post("https://bit2dec.onrender.com/user/updateHighScoreEight", {username, newHighScoreEight}, )
        .then(result => {})
        .catch()
}

export async function collectLeaderboardData(selectedLeaderboard) {
    return await axios
        .get(`https://bit2dec.onrender.com/user/LeaderboardData/${selectedLeaderboard}`)
        .then(result => result.data)
        .catch(err => {
            console.error(err);
            throw err;
        });
}

