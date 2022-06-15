import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
 
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All");

  function handleTaskDelete(deletedTaskText){
    const newTaskList = tasks.filter(task => task.text !== deletedTaskText)
    setTasks(newTaskList);
  }

  function handleFilter(filter){
      setFilter(filter);
  }

  function handleTaskSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  const tasksToDisplay = tasks.filter(task => filter === "All" ? task : task.category === filter)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} filter={filter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskSubmit}/>
      <TaskList tasks={tasksToDisplay} onTaskDelete={handleTaskDelete} filter={filter}/>
    </div>
  );
}

export default App;
