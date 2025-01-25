import express from "express";
import userController from "../controllers/userController.js";

const router = express();

router.post("/register", userController.register);

router.post("/getHighScoreFour", userController.getHighScoreFour);

router.post("/updateHighScoreFour", userController.updateHighScoreFour);

router.post("/getHighScoreEight", userController.getHighScoreEight);

router.post("/updateHighScoreEight", userController.updateHighScoreEight);

router.get("/LeaderboardData/:selectedLeaderboard", userController.collectLeaderboardData)

export default router;