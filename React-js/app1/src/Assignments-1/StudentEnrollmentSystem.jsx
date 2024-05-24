import { useState } from "react";

export function StudentEnrollmentSystem() {
    const [StudentEnrollmentSystem] = useState({
        student_ID: 123,
        name: 'Vijay',
        courseEnrolled: 'Front End',
        addNewStudent: function () { },
        removeStudent: function () {
        },
        updateCourse: function () {
        }
    })

    return <div>
        <ul>
            {Object.keys(StudentEnrollmentSystem).map((key)=>{
                return <li>{StudentEnrollmentSystem[key]}</li>
            })}
        </ul>
    </div>
}