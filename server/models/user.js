import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    highScoreFour: { type: Number, required: true, default: 0 },
    highScoreEight: { type: Number, required: true, default: 0 },
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
