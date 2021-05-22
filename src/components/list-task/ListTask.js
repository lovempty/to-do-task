import React from "react";
import { Task } from "../task/Task";

export const ListTask = ({
  listTask,
  toggleBulk,
  setToggleBulk,
  setListTask,
}) => {
  return (
    <div>
      {listTask.map((task, index) => (
        <Task
          setListTask={setListTask}
          toggleBulk={toggleBulk}
          setToggleBulk={setToggleBulk}
          key={index}
          task={task}
          listTask={listTask}
        />
      ))}
    </div>
  );
};
