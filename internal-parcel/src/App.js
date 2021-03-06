import React, { useState, useEffect } from "react";
import { listenEvent } from "@dhf/utils";

const App = ({ name }) => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    listenEvent("@dhf/internal-parcel-part", (event) => {
      updateTasks((tasklist) => [...tasklist, event.detail]);
    });
  }, []);
  return (
    <>
      <h1>{name}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
