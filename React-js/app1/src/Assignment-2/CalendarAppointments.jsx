import { useState } from "react"

export function CalendarAppointments(){
    const [CalendarAppointments] = useState ({
        eventname:"therrtham",
        date: "23/4/2026",
        time:"9:30 am",
        location:"Bank",


        newappointments: function () { },
        updateappointments: function () { },
        deleteappointments: function () { },
       
    })

    return <div>
        <ul>
            {Object.keys(CalendarAppointments).map((key) => {
                return <li>{CalendarAppointments[key]}</li>
            })}
        </ul>
    </div>
    }