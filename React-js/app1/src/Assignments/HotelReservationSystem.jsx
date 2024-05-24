import { useState } from "react"


export function HotelReservationSystem(){
    const [HotelReservationSystem] = useState ({
        roomnumber: "9640744182",
        guestname:"Vijay",
        checkindate:"12/3/2009",
        checkoutdate:"3/4/2009",
        
        reservations: function () { }, 
        cancelreservations: function () { }, 
        checkavailability: function () { }, 
             
    })

    return <div>
        <ul>
            {Object.keys(HotelReservationSystem).map((key) => {
                return <li>{HotelReservationSystem[key]}</li>
            })}
        </ul>
    </div>
    }