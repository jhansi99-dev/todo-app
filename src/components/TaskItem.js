import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/actions/taskActions";
import "../styles.css"; // Import CSS

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
