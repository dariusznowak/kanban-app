import React from "react";
import "../styles/TaskTable.scss";

const TaskTable = () => {
  return (
    <div className="taskTable">
      <div className="taskTable__header">
        <p className="taskTable__title">To do</p>
        <button className="taskTable__actionsBtn">
          <img src="/images/actions-button.svg" alt="" />
        </button>
      </div>
      <div className="taskTable__container">
        <div className="taskTable__singleTask">taskTable__singleTask</div>
        <div className="taskTable__singleTask">taskTable__singleTask</div>
        <div className="taskTable__singleTask">taskTable__singleTask</div>
        <div className="taskTable__singleTask">taskTable__singleTask</div>
      </div>
      <div className="taskTable__footer">
        <button className="taskTable__addCardBtn">+ Add card</button>
      </div>
    </div>
  );
};

export default TaskTable;
