import { useState } from "react";

export function EmployeeTimeTracker() {
  const [EmployeeTimeTracker] = useState({
    employeename: "dinesh",
    date: "27/6/2006",
    starttime: "10:00 am",
    endtime: "6:00 pm",

    clockin: function () {},
    clockout: function () {},
    calculatetotalhoursworked: function () {},
  });

  return (
    <div>
      <ul>
        {Object.keys(EmployeeTimeTracker).map((key) => {
          return <li>{EmployeeTimeTracker[key]}</li>;
        })}
      </ul>
    </div>
  );
}
