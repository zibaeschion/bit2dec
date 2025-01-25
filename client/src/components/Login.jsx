import { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import theme from "../Themes/ThemeDefault.jsx";
import { ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import {signIn, signUp} from "./functions/APIFunctions.jsx";

const Login = ({ setUser, handleToggleOpen }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    const handleCancel = () => {
        setUsername("");
        setPassword("");
        handleToggleOpen();
    };

    const handleSwitchForm = () => {
        setIsSignUp((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            signUp(username, password);
            handleCancel();
        } else {
            const user = signIn(username, password);
            setUser(user.username);
            console.log(user);
            handleCancel()
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: 2,
                        backgroundColor: '#333',
                        color: 'white',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        {isSignUp ? "Create Account" : "Login"}
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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {isSignUp ? (
                            <Link
                                href="#"
                                variant="body2"
                                onClick={handleSwitchForm}
                                sx={{ cursor: 'pointer', color: 'white' }}
                            >
                                Back to Login
                            </Link>
                        ) : (
                            <Link
                                href="#"
                                variant="body2"
                                onClick={handleSwitchForm}
                                sx={{ cursor: 'pointer', color: 'white' }}
                            >
                                Create Account
                            </Link>
                        )}

                        <Link
                            href="#"
                            variant="body2"
                            sx={{ cursor: 'pointer', color: 'white' }}
                        >
                            Forgot Password?
                        </Link>
                    </Box>

                    <Button
                        type="submit"
                        variant="outlined"
                        color="white"
                        fullWidth
                    >
                        {isSignUp ? "Sign Up" : "Log In"}
                    </Button>

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

// Pass the ESLint validation and have proper prop validation
Login.propTypes = {
    handleToggleOpen: PropTypes.func.isRequired,
};

export default Login;
