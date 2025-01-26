import axios from 'axios';

export async function signUp(username, password) {
    axios
        .post('http://localhost:5050/user/register', { username, password })
        .then((result) => {})
        .catch((err) => console.log(err.message));
}

export async function getHighScoreFour(username) {
    return await axios
        .post('http://localhost:5050/user/getHighScoreFour/', { username })
        .then((result) => {
            return result.data;
        })
        .catch((err) => console.log(err.message));
}

export async function updateHighScoreFour(username, newHighScoreFour) {
    await axios
        .post('http://localhost:5050/user/updateHighScoreFour', {
            username,
            newHighScoreFour,
        })
        .then((result) => {})
        .catch((err) => console.log(err.message));
}

export async function getHighScoreEight(username) {
    return await axios
        .post('http://localhost:5050/user/getHighScoreEight/', { username })
        .then((result) => {
            return result.data;
        })
        .catch((err) => console.log(err.message));
}

export async function updateHighScoreEight(username, newHighScoreEight) {
    await axios
        .post('http://localhost:5050/user/updateHighScoreEight', {
            username,
            newHighScoreEight,
        })
        .then((result) => {})
        .catch((err) => console.log(err.message));
}

export async function signIn(username, password) {
    console.log(username, password);
    return await axios
        .post('http://localhost:5050/user/signIn', { username, password })
        .then((result) => result.data)
        .catch((err) => console.log(err.message));
}

export async function collectLeaderboardData(selectedLeaderboard) {
    return await axios
        .get(
            `http://localhost:5050/user/LeaderboardData/${selectedLeaderboard}`
        )
        .then((result) => result.data)
        .catch((err) => {
            console.log(err.message);
        });
}
