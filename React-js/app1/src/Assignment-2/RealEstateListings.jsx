import { Component, useState } from "react"

export class RealEstateListings extends Component{
   state = {
        propertytype: "building",
        price:"5000000",
        location:"chittoor",
      

        listings: function () { }, 
        removelistings: function () { }, 
        listingsbycriteria: function () { }, 

             
    }
    render(){
        return <div>
            <p>{this.state.building}</p>
            <p>{this.state.price}</p>
            <p>{this.state.location}</p>
        </div>
    }
    }