import React, { useState } from "react";
import { FormTask } from "../form-task/FormTask";
import "./Task.css";

export const Task = ({
  task,
  toggleBulk,
  setToggleBulk,
  listTask,
  setListTask,
}) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  const handleRemove = () => {
    let updatedList = listTask.filter((item) => item.title != task.title);
    setListTask(updatedList);
  };
  const handleToggleBulk = (e) => {
    if (e.target.checked) {
      toggleBulk.push(e.target.value);
    } else {
      toggleBulk = toggleBulk.filter((item) => item != task.title);
    }
    let selected = [];
    selected.push(...toggleBulk);
    setToggleBulk(selected);
    // console.log("toggleBulk:", toggleBulk);
  };
  return (
    <div className="container-task">
      <div className="task">
        <input
          onChange={(e) => handleToggleBulk(e)}
          type="checkbox"
          value={task.title}
        />
        <p>{task.title}</p>
        <div className="button-group">
          <button
            onClick={() => setToggleExpand(!toggleExpand)}
            className="detail-btn"
          >
            Detail
          </button>
          <button onClick={handleRemove} className="remove-btn">
            Remove
          </button>
        </div>
      </div>
      {toggleExpand && (
        <div className="expand-detail">
          <FormTask
            listTask={listTask}
            setListTask={setListTask}
            task={task}
            typeAction={"Update"}
          />
        </div>
      )}
    </div>
  );
};
