import { Component } from "react"


export class MusicBandManager extends Component{
   state = {
        bandmembers: "82",
        upcominggigs:"ios",
        setlist:"th",

        addmembers: function () { }, 
        schedulegigs: function () { }, 
        updatethesetlist: function () { }, 

             
    }
    render(){
        return <div>
            <p>{this.state.bandmembers}</p>
            <p>{this.state.upcominggigs}</p>
            <p>{this.state.setlist}</p>

        </div>
    }
}