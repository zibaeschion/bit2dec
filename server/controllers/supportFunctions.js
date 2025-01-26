import bcrypt from 'bcrypt';

//help Function to Hash Password
export const hashPassword = async (password) => {
    const saltRounds = 10; // The cost factor (higher = slower but more secure)
    return await bcrypt.hash(password, saltRounds);
};