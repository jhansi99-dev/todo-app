import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask, updateTask } from "../redux/taskSlice"; // Import updateTask action

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);

    // Local state to track edits
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState("");
    const [editedPriority, setEditedPriority] = useState("");

    // Add a new task
    const handleAddTask = () => {
        const newTask = { id: Date.now(), name: "New Task", priority: "Medium" };
        dispatch(addTask(newTask));
    };

    // Remove a task
    const handleRemoveTask = (taskId) => {
        dispatch(removeTask(taskId));
    };

    // Start editing a task
    const handleEditTask = (task) => {
        setEditingTaskId(task.id);
        setEditedTaskName(task.name);
        setEditedPriority(task.priority);
    };

    // Save edited task
    const handleSaveTask = (taskId) => {
        dispatch(updateTask({ id: taskId, name: editedTaskName, priority: editedPriority }));
        setEditingTaskId(null);
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h2>Task List</h2>
            <button onClick={handleAddTask} style={buttonStyle}>+ Add Task</button>
            {tasks.length === 0 ? (
                <p>No tasks found. Add some tasks!</p>
            ) : (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {tasks.map((task) => (
                        <li key={task.id} style={taskStyle}>
                            {editingTaskId === task.id ? (
                                <>
                                    {/* Editable input field for task name */}
                                    <input 
                                        type="text" 
                                        value={editedTaskName} 
                                        onChange={(e) => setEditedTaskName(e.target.value)} 
                                        style={inputStyle} 
                                    />
                                    
                                    {/* Dropdown for priority selection */}
                                    <select 
                                        value={editedPriority} 
                                        onChange={(e) => setEditedPriority(e.target.value)}
                                        style={dropdownStyle}
                                    >
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>

                                    {/* Save button */}
                                    <button onClick={() => handleSaveTask(task.id)} style={saveButtonStyle}>✔️</button>
                                </>
                            ) : (
                                <>
                                    {/* Clickable task name */}
                                    <span onClick={() => handleEditTask(task)} style={taskTextStyle}>
                                        {task.name} - <strong>{task.priority}</strong>
                                    </span>

                                    {/* Remove button */}
                                    <button onClick={() => handleRemoveTask(task.id)} style={removeButtonStyle}>❌</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Styles
const buttonStyle = { padding: "10px 20px", margin: "10px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" };
const taskStyle = { padding: "10px", margin: "5px", border: "1px solid gray", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center", width: "400px", marginLeft: "auto", marginRight: "auto" };
const removeButtonStyle = { padding: "5px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer", borderRadius: "3px" };
const saveButtonStyle = { padding: "5px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer", borderRadius: "3px", marginLeft: "5px" };
const inputStyle = { padding: "5px", width: "120px", marginRight: "5px" };
const dropdownStyle = { padding: "5px", marginRight: "5px" };
const taskTextStyle = { cursor: "pointer" };

export default TaskList;










