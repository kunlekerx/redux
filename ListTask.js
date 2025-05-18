import React from "react";
import Task from "./Task";

function ListTask({ tasks, onToggle, onUpdate }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default ListTask;
