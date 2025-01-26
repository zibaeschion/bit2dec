import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import TutorialExplanation from './components/tutorial/TutorialExplanation.jsx';
import GameModes from './components/GameModes/GameModes.jsx';
import Math from './components/GameModes/Maths.jsx';
import ClassicMode from './components/GameModes/ClassicMode.jsx';
import TimeMode from './components/GameModes/TimeMode.jsx';
import FourBitTutorial from './components/tutorial/FourBitTutorial.jsx';
import Leaderboard from './components/Leaderboard/Leaderboard.jsx';
import { UserProvider } from './components/UserContext';

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Box className={'appContainer'}>
                    {/* Navigation Bar */}
                    <NavigationBar />

                    {/* Routing to different pages */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gamemodes" element={<GameModes />} />
                        <Route
                            path="/tutorial"
                            element={<TutorialExplanation />}
                        />
                        <Route
                            path="/tutorial/:id"
                            element={<FourBitTutorial />}
                        />
                        <Route
                            path="/classicMode/:id"
                            element={<ClassicMode />}
                        />
                        <Route path="/timeMode/:id" element={<TimeMode />} />
                        <Route path="/math/:id" element={<Math />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </UserProvider>
    );
};

export default App;
