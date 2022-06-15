import React from "react";
import Task from "./Task";

function TaskList({tasks, onTaskDelete}) {

    const tasksToDisplay = tasks.map((task) => (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onTaskDelete={onTaskDelete}
      />
    ));

  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

function Bla() {
  const [numbers, setNumbers] = useState([]);

  function addNumber() {
    numbers.push(1);
    setNumbers(numbers);
  }

  return <button onClick={addNumber}>Add</button>;
}

export default TaskList;
