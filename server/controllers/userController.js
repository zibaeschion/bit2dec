import UserModel from "../models/user.js";
import {hashPassword} from "./supportFunctions.js"
import bcrypt from "bcrypt";

// Registers a new user with the provided username and password, saving them to the database.
const register = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const doc = new UserModel({ username: username, password: hashedPassword });
    await doc
        .save()
        .then(() => res.status(200).send('Registration successfully!'))
        .catch((error) => res.status(500).send(error));
};

// Signs in a user by checking if their credentials match an existing user in the database.
const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await UserModel.findOne({ username }).lean();
        if (!user) {
            return res.status(401).send('User not found!');
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials!');
        }

        res.status(200).send({ username: user.username });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Fetches a user's highscore for the "4-bit" game mode.
const getHighScoreFour = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await UserModel.findOne(
            { username },
            'highScoreFour'
        ).lean();
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.status(200).send({
            accountName: user.username,
            highScoreFour: user.highScoreFour,
        });
    } catch (error) {
        res.status(500).send({ error: 'Error fetching highscore' });
    }
};

// Updates a user's highscore for the "4-bit" game mode.
const updateHighScoreFour = async (req, res) => {
    try {
        const { username, newHighScoreFour } = req.body;
        await UserModel.findOneAndUpdate(
            { username },
            { highScoreFour: newHighScoreFour }
        );
        res.status(200).send('Updated successfully!');
    } catch {
        res.status(500).send('Error updating highscore');
    }
};

// Fetches a user's highscore for the "8-bit" game mode.
const getHighScoreEight = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await UserModel.findOne(
            { username },
            'highScoreEight'
        ).lean();
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.status(200).send({
            accountName: user.username,
            highScoreEight: user.highScoreEight,
        });
    } catch (error) {
        res.status(500).send({ error: 'Error fetching highscore' });
    }
};

// Updates a user's highscore for the "8-bit" game mode.
const updateHighScoreEight = async (req, res) => {
    try {
        const { username, newHighScoreEight } = req.body;
        await UserModel.findOneAndUpdate(
            { username },
            { highScoreEight: newHighScoreEight }
        );
        res.status(200).send('Updated successfully!');
    } catch {
        res.status(500).send('Error updating highscore');
    }
};

// Collects leaderboard data based on the selected game mode (4-bit or 8-bit).
const collectLeaderboardData = async (req, res) => {
    try {
        const { selectedLeaderboard } = req.params;
        const users = await UserModel.find(
            {},
            'username ' + selectedLeaderboard
        ).lean();
        if (!Array.isArray(users)) throw new Error('Unexpected data format');
        res.status(200).send(users); // Returns raw data
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default {
    register,
    getHighScoreFour,
    updateHighScoreFour,
    getHighScoreEight,
    updateHighScoreEight,
    collectLeaderboardData,
    signIn,
};
