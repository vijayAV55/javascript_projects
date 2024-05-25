import { Component } from "react";


export class StudentEnrollmentSystem extends Component {
    state = {
        studentID: '123',
        studentname: 'Vijay',
        courseEnrolled: 'Front End',
        person:{
            fname:"vijay"
        },
        students:["DDk","HHJ"],
        addNewStudent: function () { },
        removeStudent: function () {
        },
        updateCourse: function () {
        },
    }
    render(){
        return <div>
            <p>{this.state.studentID}</p>
            <p>{this.state.studentname}</p>
            <p>{this.state.courseEnrolled}</p>
        </div>
    }

   
}