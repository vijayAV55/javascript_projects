import { Component } from "react"



export class HotelReservationSystem extends Component{
    state = {
        roomnumber: "9640744182",
        guestname:"Vijay",
        checkindate:"12/3/2009",
        checkoutdate:"3/4/2009",
        
        reservations: function () { }, 
        cancelreservations: function () { }, 
        checkavailability: function () { }, 
             
    }
render(){
    return <div>
        <p>{this.state.guestname}</p>
        <p>{this.state.checkindate}</p>
        <p>{this.state.checkoutdate}</p>
    </div>
}
    }