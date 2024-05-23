import { useState } from "react"




export const Git = () => {
    const [myName] = useState("Vijay ram");
    const [person] = useState({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    });

    let [Students] = useState(["vijay", "guna", "ram", "sathi", "jaipal"]);
    return (
        <div>
            <h1>hlo ram {myName}</h1>
            <ul>
                {/* <li>{person.fname}</li>
                <li>{person.lname}</li>
                <li>{person.email}</li> */}

                {Object.keys(person).map((key) => {
                    if (key !== 'company' && key !== "address") {
                        return <li>{person[key]}</li>
                    } else if (key == 'company') {
                        return Object.keys(person[key]).map((k) => {
                            return <li>{person[key][k]}</li>
                        })
                        
                    }
                    
                    
                })}
            </ul>
            <ul>
                {Students.map(function (Std) {
                    return <li>{Std}</li>
                })}
            </ul>

        </div>)
}
export default Git