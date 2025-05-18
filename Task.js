import React, { useState } from "react";

function Task({ task, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    onUpdate(task.id, newDesc);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        background: "#f4f4f4",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: task.isDone ? "line-through" : "none",
      }}
    >
      {isEditing ? (
        <input
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          style={{ flex: 1, marginRight: "10px" }}
        />
      ) : (
        <span>{task.description}</span>
      )}

      <div>
        <button onClick={() => onToggle(task.id)} style={{ marginRight: "5px" }}>
          {task.isDone ? "Undo" : "Done"}
        </button>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default Task;
