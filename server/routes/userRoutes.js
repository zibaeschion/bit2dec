import express from 'express';
import userController from '../controllers/userController.js';

const router = express();

// Route for registering a new user
router.post('/register', userController.register);

// Route for signing in a user
router.post('/signIn', userController.signIn);

// Route for fetching the high score for 4-bit mode
router.post('/getHighScoreFour', userController.getHighScoreFour);

// Route for updating the high score for 4-bit mode
router.post('/updateHighScoreFour', userController.updateHighScoreFour);

// Route for fetching the high score for 8-bit mode
router.post('/getHighScoreEight', userController.getHighScoreEight);

// Route for updating the high score for 8-bit mode
router.post('/updateHighScoreEight', userController.updateHighScoreEight);

// Route for collecting leaderboard data based on the selected category (highScoreFour or highScoreEight)
router.get(
    '/LeaderboardData/:selectedLeaderboard',
    userController.collectLeaderboardData
);

export default router;
