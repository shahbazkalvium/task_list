import React, { useState } from 'react';

// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.

export default function TaskForm({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}