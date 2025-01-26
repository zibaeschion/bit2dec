import axios from 'axios';

// Function to sign up a new user by sending their username and password to the backend
export async function signUp(username, password) {
    axios
        .post('https://bit2dec.onrender.com/user/register', { username, password })
        .catch((err) => {
            console.log(err.message);
            throw err;
        });
}

// Function to sign in a user by sending their username and password to the backend
export async function signIn(username, password) {
    console.log(username, password);
    return await axios
        .post('https://bit2dec.onrender.com/user/signIn', { username, password })
        .then((result) => result.data)
        .catch((err) => console.log(err.message));
}

// Function to get the high score for 4-Bit game mode for a specific user
export async function getHighScoreFour(username) {
    return await axios
        .post('https://bit2dec.onrender.com/user/getHighScoreFour/', { username })
        .then((result) => {
            return result.data;
        })
        .catch((err) => console.log(err.message));
}

// Function to update the high score for 4-Bit game mode for a specific user
export async function updateHighScoreFour(username, newHighScoreFour) {
    await axios
        .post('https://bit2dec.onrender.com/user/updateHighScoreFour', {
            username,
            newHighScoreFour,
        })
        .then((result) => {})
        .catch((err) => console.log(err.message));
}

// Function to get the high score for 8-Bit game mode for a specific user
export async function getHighScoreEight(username) {
    return await axios
        .post('https://bit2dec.onrender.com/user/getHighScoreEight/', { username })
        .then((result) => {
            return result.data;
        })
        .catch((err) => console.log(err.message));
}

// Function to update the high score for 8-Bit game mode for a specific user
export async function updateHighScoreEight(username, newHighScoreEight) {
    await axios
        .post('https://bit2dec.onrender.com/user/updateHighScoreEight', {
            username,
            newHighScoreEight,
        })
        .then((result) => {})
        .catch((err) => console.log(err.message));
}

// Function to collect leaderboard data based on a selected leaderboard category
export async function collectLeaderboardData(selectedLeaderboard) {
    return await axios
        .get(
            `https://bit2dec.onrender.com/user/LeaderboardData/${selectedLeaderboard}`
        )
        .then((result) => result.data)
        .catch((err) => {
            console.log(err.message);
        });
}
