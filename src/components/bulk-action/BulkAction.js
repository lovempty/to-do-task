import React from "react";
import "./BulkAction.css";

export const BulkAction = ({
  toggleBulk,
  listTask,
  setListTask,
  setToggleBulk,
}) => {
  const handleRemove = () => {
    const resultList = listTask.filter(
      (item) => !toggleBulk.includes(item.title)
    );
    setListTask(resultList);
    setToggleBulk([]);
  };
  return (
    <div className="bulk-action">
      <p>Bulk Action</p>
      <div className="button-group">
        <button className="done-btn">Done</button>
        <button onClick={handleRemove} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};
