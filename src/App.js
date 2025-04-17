import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput) {
      const newTask = { id: uuidv4(), task: taskInput };
      setTasks([...tasks, newTask]);
      setTaskInput(""); // Clear input field
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <div className="task-box">
        <h1>Task Manager</h1>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
  
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task} <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default App;
