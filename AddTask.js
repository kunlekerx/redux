import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task"
        style={{ padding: "8px", width: "70%" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px", marginLeft: "10px" }}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
