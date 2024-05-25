import { Component } from "react"


export class LanguageLearningApp extends Component{
    state ={
        vocabularywords: "aeiou",
        definitions:"60%",
        examplesentences:"6000",


        newwords: function () { },
        removewords: function () { },
        testvocabulary: function () { },       
    }
 render(){
    return <div>
        <p>{this.state.vocabularywords}</p>
        <p>{this.state.definitions}</p>
        <p>{this.state.examplesentences}</p>

    </div>
 }
    }