import { useState } from "react"


export function MusicBandManager(){
    const [MusicBandManager] = useState ({
        bandmembers: "82",
        upcominggigs:"ios",
        setlist:"",

        addmembers: function () { }, 
        schedulegigs: function () { }, 
        updatethesetlist: function () { }, 

             
    })

    return <div>
        <ul>
            {Object.keys(MusicBandManager).map((key) => {
                return <li>{MusicBandManager[key]}</li>
            })}
        </ul>
    </div>
    }