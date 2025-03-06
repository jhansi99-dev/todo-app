// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import auth slice
import tasksReducer from "./taskSlice"; // Import tasks slice

const store = configureStore({
    reducer: {
        auth: authReducer,   // Ensure auth reducer is included
        tasks: tasksReducer, // Ensure tasks reducer is included
    },
});

export default store;






