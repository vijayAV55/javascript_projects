import { Component } from "react"


export class MusicPlayer extends Component{
    state= {
        currentsong:"tamil",
        playlist: 543,

        play: function () { },
        pause: function () { },
        skip: function () { },
        shufflesongs:function(){},
    }
render (){
    return <div>
        <p>{this.state.currentsong}</p>
        <p>{this.state.currentsong}</p>
    </div>
}
}