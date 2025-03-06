// components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import '../styles/TaskInput.css';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask({
                id: Date.now(),
                text: task,
                priority: priority
            }));
            setTask('');
        }
    };

    return (
        <div className="task-input">
            <input 
                type="text" 
                placeholder="Enter task..." 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;

