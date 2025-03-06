import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        { id: 1, name: "Learn Redux", priority: "High" },
        { id: 2, name: "Build a Todo App", priority: "Medium" },
    ],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const { id, name, priority } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.name = name;
                task.priority = priority;
            }
        },
    },
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;







