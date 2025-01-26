import mongoose from 'mongoose';

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    highScoreFour: { type: Number, required: true, default: 0 },
    highScoreEight: { type: Number, required: true, default: 0 },
});

// Create a model based on the User schema
const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
