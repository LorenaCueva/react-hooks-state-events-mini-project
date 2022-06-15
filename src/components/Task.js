import React from "react";

function Task({category, text, onTaskDelete }) {

  function handleDeleteClick(){
    onTaskDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
