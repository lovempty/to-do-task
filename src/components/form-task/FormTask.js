import React, { useEffect, useState } from "react";
import "./FormTask.css";

export const FormTask = ({ listTask, setListTask, typeAction, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [formattedTodayDate, setFormattedTodayDate] = useState("");
  // i got stuck really hard at this point :(( thank god i solved it
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeAction == "Add") {
      const newTask = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
      };
      listTask.push(newTask);
      let newListTask = [];
      newListTask.push(...listTask);
      newListTask = newListTask.sort(function (a, b) {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      setListTask(newListTask);
    } else {
      const newList = listTask.map((item) => {
        if (item.title == task.title) {
          const updatedTask = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
          };
          return updatedTask;
        }
        return item;
      });
      setListTask(newList);
      // console.log(listTask);
    }
  };
  useEffect(() => {
    var current = new Date();
    current.setDate(current.getDate() + 3);
    setFormattedTodayDate(current.toISOString().substr(0, 10));
  }, [formattedTodayDate]);
  return (
    <div className="form-task">
      <input
        className="input"
        defaultValue={task?.title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Add a new task..."
      />
      <p className="label">Description</p>
      <textarea
        defaultValue={task?.description}
        onChange={(event) => setDescription(event.target.value)}
        className="task-content"
      />
      <div className="due-date">
        <p className="label">Due Date</p>
        <input
          onChange={(event) => setDueDate(event.target.value)}
          defaultValue={task?.dueDate || formattedTodayDate}
          className="date-created"
          type="date"
        />
      </div>
      <div className="priority">
        <p className="label">Priority</p>
        <select
          onChange={(event) => setPriority(event.target.value)}
          id="priority"
          defaultValue={task?.priority || "normal"}
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </div>
      <br />
      <button onClick={handleSubmit} className="btn">
        {typeAction}
      </button>
    </div>
  );
};
