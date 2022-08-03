import React from "react";
import TaskTable from "./TaskTable";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <TaskTable />
        <TaskTable />
        <TaskTable />
      </div>
    </div>
  );
};

export default Home;
