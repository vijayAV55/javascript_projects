import { useState } from "react"

export function WeatherApp(){
    const [WeatherApp] = useState ({
        temperature: "50%c",
        humidity:"nv",
        windspeed:"cm",


        updateweatherdata: function () { },      
    })

    return <div>
        <ul>
            {Object.keys(WeatherApp).map((key) => {
                return <li>{WeatherApp[key]}</li>
            })}
        </ul>
    </div>
    }