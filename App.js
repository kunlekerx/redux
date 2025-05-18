import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterDone, setFilterDone] = useState("all");

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const updateTask = (id, newDesc) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, description: newDesc } : task
      )
    );
  };

  const filteredTasks =
    filterDone === "all"
      ? tasks
      : tasks.filter((task) => task.isDone === (filterDone === "done"));

  return (
    <div className="App" style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📝 Todo List</h2>
      <AddTask onAdd={addTask} />
      <div style={{ margin: "15px 0" }}>
        <label>Filter: </label>
        <select onChange={(e) => setFilterDone(e.target.value)}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="not">Not Done</option>
        </select>
      </div>
      <ListTask tasks={filteredTasks} onToggle={toggleDone} onUpdate={updateTask} />
    </div>
  );
}

export default App;
