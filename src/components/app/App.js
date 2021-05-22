import { useState } from "react";
import { NewTask } from "../new-task/NewTask";
import { ToDoList } from "../to-do-list/ToDoList";
import "./App.css";
function App() {
  const [listTask, setListTask] = useState([]);

  return (
    <div className="App">
      <div className="new-task">
        <NewTask listTask={listTask} setListTask={setListTask} />
      </div>
      <div className="todo-list">
        <ToDoList listTask={listTask} setListTask={setListTask} />
      </div>
    </div>
  );
}

export default App;
