import React from "react";
import "../styles/TaskTable.scss";

const TaskTable = () => {
  return (
    <div className="task-table">
      <div className="taskTable-header">
        <p>To do</p>
        <button className="taskTable-actionsBtn">...</button>
      </div>
      <div className="taskTable-container">
        <div className="taskTable-singleTask">taskTable-singleTask</div>
        <div className="taskTable-singleTask">taskTable-singleTask</div>
        <div className="taskTable-singleTask">taskTable-singleTask</div>
        <div className="taskTable-singleTask">taskTable-singleTask</div>
      </div>
      <div className="taskTable-footer">
        <button className="taskTable-addCardBtn">+ Add card</button>
      </div>
    </div>
  );
};

export default TaskTable;
