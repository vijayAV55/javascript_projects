import { Component } from "react";


export class WeatherApp extends Component{
    state ={
        temperature: "50%c",
        humidity:"nv",
        windspeed:"cm",


        updateweatherdata: function () { },      
    }
    render (){
        return <div>
            <p>{this.state.temperature}</p>
            <p>{this.state.humidity}</p>
            <p>{this.state.windspeed}</p>
        </div>
    }

    }