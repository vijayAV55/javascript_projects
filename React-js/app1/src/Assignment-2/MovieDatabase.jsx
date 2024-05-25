import { Component } from "react"


export class MovieDatabase extends Component{
  state ={
        movietitle:"Devara",
        director: "Jaipal",
        releaseyear:2005,

        newmovies: function () { },
        removemovies: function () { },
        searchformoviesbydirector: function () { },
       
    }

   render(){
    return <div>
        <p>{this.state.movietitle}</p>
        <p>{this.state.director}</p>
        <p>{this.state.releaseyear}</p>

    </div>
   }
    }