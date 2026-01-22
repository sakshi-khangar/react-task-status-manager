import React, { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([
        { name: "Task 1", status: "Done" },
        { name: "Task 2", status: "Not Done" },
        { name: "Task 3", status: "Done" }
    ]);

    const toggleStatus = (index) => {
        const newTasks = [...tasks];
        newTasks[index].status =
            newTasks[index].status === "Done" ? "Not Done" : "Done";
        setTasks(newTasks);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Employee Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ margin: "10px 0" }}>
                        <span style={{ marginRight: "10px" }}>
                            <strong>{task.name}</strong> - {task.status}
                        </span>
                        <button onClick={() => toggleStatus(index)}>Toggle Status</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
