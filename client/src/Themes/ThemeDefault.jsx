import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        // For MuiTextFields:
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#555',
                    borderRadius: 20,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 20,
                        "& fieldset": {
                            borderColor: "transparent",
                            borderRadius: 20,
                        },
                        "&:hover fieldset": {
                            borderColor: "#777",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#999",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "#777",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#999",
                    },
                    "& .MuiInputBase-input": {
                        color: "#333",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiInputBase-input": {
                        color: "#999",
                    },
                },
            },
        },
        // For MuiButton:
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#444',
                    color: '#fff',
                    borderRadius: 10,
                    textTransform: 'none',
                    padding: '10px 20px',
                    borderColor: '#444',
                    '&:hover': {
                        backgroundColor: '#666',
                        borderColor: '#777',
                    },
                    '&:active': {
                        backgroundColor: '#555',
                    },
                },
            },
        },
    },
});

export default theme;
