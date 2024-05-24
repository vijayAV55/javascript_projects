import { useState } from "react"


export function BlogPostManage(){
    const [BlogPostManage] = useState ({
        posttitle: "pushpa",
        author:"vijay",
        content:"cenima",
        tags:"",

        createnewposts: function () { }, 
        editposts: function () { }, 
        deleteposts: function () { }, 

             
    })

    return <div>
        <ul>
            {Object.keys(BlogPostManage).map((key) => {
                return <li>{BlogPostManage[key]}</li>
            })}
        </ul>
    </div>
    }