import { useState } from "react"

export function GameCharacter(){
    const [GameCharacter] = useState ({
        name:"Ram",
        level: "200",
        healthpoints :"10%",

        attack: function () { },
        defend: function () { },
        levelup: function () { },
       
    })

    return <div>
        <ul>
            {Object.keys(GameCharacter).map((key) => {
                return <li>{GameCharacter[key]}</li>
            })}
        </ul>
    </div>
    }