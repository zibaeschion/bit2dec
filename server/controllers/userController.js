import UserModel from "../models/user.js";
import mongoose from "mongoose";


const register = async (req, res) => {
    const {username, password} = req.body;
    const doc = new UserModel({username: username, password: password});
    await doc.save().then(user => {
        res.status(200).send("Registration successfully!");
    }).catch(error => {
        res.status(500).send(error);
    });
}

const signIn = async (req, res) => {
    try {
        console.log(req.body);
        const {username, password} = req.body;
        console.log(username, password);
        const user = await UserModel.findOne({username, password}, "username").lean();
        if (!user) {
            res.status(401).send("User not found!");
        }
        console.log(user);
        res.status(200).send({
            username: user.username
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const getHighScoreFour = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await UserModel.findOne({ username }, "highScoreFour").lean();

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({
            accountName: user.username,
            highScoreFour: user.highScoreFour
        });
    } catch (error) {
        res.status(500).send({ error: "An error occurred while fetching the user's highscore" });
    }
}

const updateHighScoreFour = async (req, res) => {
    try {
        const { username, newHighScoreFour } = req.body;

        await UserModel.findOneAndUpdate({username}, {highScoreFour : newHighScoreFour});
        res.status(200).send("Updated successfully!")
    }
    catch {
        res.status(500).send("An error occurred while fetching the user's highscore" );
    }
}

const getHighScoreEight = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await UserModel.findOne({ username }, "highScoreEight").lean();

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({
            accountName: user.username,
            highScoreEight: user.highScoreEight
        });
    } catch (error) {
        res.status(500).send({ error: "An error occurred while fetching the user's highscore" });
    }
}

const updateHighScoreEight = async (req, res) => {
    try {
        const { username, newHighScoreEight } = req.body;

        await UserModel.findOneAndUpdate({username}, {highScoreEight : newHighScoreEight});
        res.status(200).send("Updated successfully!")
    }
    catch {
        res.status(500).send("An error occurred while fetching the user's highscore" );
    }
}

const collectLeaderboardData = async (req, res) => {
    try {
        const { selectedLeaderboard } = req.params;

        const users = await UserModel.find({}, "username " + selectedLeaderboard).lean();

        if (!Array.isArray(users)) {
            throw new Error("Unexpected data format from database");
        }

        res.status(200).send(users); // Nur die rohen Daten zurücksenden
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export default {register, getHighScoreFour, updateHighScoreFour, getHighScoreEight, updateHighScoreEight, collectLeaderboardData, signIn}
