import React from "react";
import { FormTask } from "../form-task/FormTask";
import "./NewTask.css";

export const NewTask = ({ listTask, setListTask }) => {
  return (
    <div className="container-a">
      <p className="title">New Task</p>
      <FormTask
        listTask={listTask}
        setListTask={setListTask}
        typeAction={"Add"}
      />
    </div>
  );
};
