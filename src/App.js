// src/App.js
import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Logout from "./components/Logout";
import TaskList from "./components/TaskList";

const App = () => {
    const authState = useSelector((state) => state.auth); // Debug state
    console.log("Redux Auth State:", authState); // Check if Redux state is loading

    if (!authState) {
        return <div>Loading...</div>; // Handle undefined state case
    }

    return (
        <div>
            {authState.isAuthenticated ? (
                <div>
                    <Logout />
                    <TaskList />
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default App;







