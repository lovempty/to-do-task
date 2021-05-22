import React, { useState } from "react";
import { BulkAction } from "../bulk-action/BulkAction";
import { ListTask } from "../list-task/ListTask";
import "./ToDoList.css";

export const ToDoList = ({ listTask, setListTask }) => {
  const [toggleBulk, setToggleBulk] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  const search = (listTask, keyword) => {
    // console.log("check listtask", listTask);
    if (keyword != "") {
      // console.log(keyword);
      const result = listTask.filter((task) => task.title.includes(keyword));
      setResultSearch(result);
    } else {
      // console.log("do it" + listTask);
      setResultSearch([]);
    }
  };
  return (
    <>
      <div className="container-b">
        <p className="title">To Do List</p>
        <input
          onChange={(event) => search(listTask, event.target.value)}
          className="input"
          type="text"
          placeholder="Search by title..."
        />
        <ListTask
          toggleBulk={toggleBulk}
          setToggleBulk={setToggleBulk}
          listTask={resultSearch == "" ? listTask : resultSearch}
          setListTask={setListTask}
        />
      </div>
      {toggleBulk.length != 0 && (
        <div className="popup-bulk-action">
          <BulkAction
            setToggleBulk={setToggleBulk}
            toggleBulk={toggleBulk}
            listTask={listTask}
            setListTask={setListTask}
          />
        </div>
      )}
    </>
  );
};
