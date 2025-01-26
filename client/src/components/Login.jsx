import { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import theme from '../Themes/ThemeDefault.jsx';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { signIn, signUp } from './functions/APIFunctions.jsx';

// Login component manages user login and signup forms
const Login = ({ setUser, handleToggleOpen }) => {
    const [username, setUsername] = useState(''); // Store username input
    const [password, setPassword] = useState(''); // Store password input
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between SignUp/Login

    // Cancel action to reset input fields and close modal
    const handleCancel = () => {
        setUsername('');
        setPassword('');
        handleToggleOpen();
    };

    // Switch between SignUp and Login form
    const handleSwitchForm = () => {
        setIsSignUp((prev) => !prev);
    };

    // Handle form submission for either login or signup
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isSignUp) {
                // Attempt to sign up
                await signUp(username, password);
                alert("Sign-up successful! You can now log in.");
                handleCancel();
            } else {
                // Attempt to sign in
                const result = await signIn(username, password);
                setUser(result.username); // Assuming the backend sends { username }
                handleCancel();
            }
        } catch (err) {
            console.error(err);

            // Show appropriate error messages
            if (isSignUp) {
                alert("Sign-up failed. Username might already exist.");
            } else {
                alert("Login failed. Check username and password.");
            }
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
                <Box className={'loginContainer'}>
                    <Typography variant="h4" gutterBottom>
                        {isSignUp ? 'Create Account' : 'Login'}
                    </Typography>

                    {/* Common fields for both Login and SignUp */}
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Box className={'loginContainer2'}>
                        {/* Conditional Link to toggle between forms */}
                        {isSignUp ? (
                            <Link
                                href="#"
                                variant="body2"
                                onClick={handleSwitchForm}
                                className={'loginElement'}
                            >
                                Back to Login
                            </Link>
                        ) : (
                            <Link
                                href="#"
                                variant="body2"
                                onClick={handleSwitchForm}
                                className={'loginElement'}
                            >
                                Create Account
                            </Link>
                        )}
                    </Box>

                    {/* Submit button */}
                    <Button
                        type="submit"
                        variant="outlined"
                        color="white"
                        fullWidth
                    >
                        {isSignUp ? 'Sign Up' : 'Log In'}
                    </Button>

                    {/* Cancel button */}
                    <Button
                        variant="outlined"
                        color="white"
                        fullWidth
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Box>
            </form>
        </ThemeProvider>
    );
};

// Prop validation for handling 'handleToggleOpen'
Login.propTypes = {
    handleToggleOpen: PropTypes.func.isRequired,
};

export default Login;
