import { useState } from "react";

export function TaskTracker() {
  const [TaskTracker] = useState({
    taskname: "randoom",
    duedate: "27/6/2006",
    priority: "cam",

    addtasks: function () {},
    marktasksascomplete: function () {},
    filtertasksbypriority: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(TaskTracker).map((key) => {
          return <li>{TaskTracker[key]}</li>;
        })}
      </ul>
    </div>
  );
}
