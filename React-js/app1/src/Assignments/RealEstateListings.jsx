import { useState } from "react"

export function RealEstateListings(){
    const [RealEstateListings] = useState ({
        propertytype: "building",
        price:"5000000",
        location:"chittoor",
      

        listings: function () { }, 
        removelistings: function () { }, 
        listingsbycriteria: function () { }, 

             
    })

    return <div>
        <ul>
            {Object.keys(RealEstateListings).map((key) => {
                return <li>{RealEstateListings[key]}</li>
            })}
        </ul>
    </div>
    }