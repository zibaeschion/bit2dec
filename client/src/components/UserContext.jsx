import { createContext, useContext, useState } from 'react';

// Create a Context for managing user data (like username)
const UserContext = createContext();

// This is the UserProvider component that wraps around other components to provide the context
export const UserProvider = ({ children }) => {
    // Declare a state variable `username` to hold the username, initialized as null
    const [username, setUsername] = useState(null);

    // Return the UserContext.Provider that wraps the children components
    // The value provided to the context includes both the `username` and `setUsername` function
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
