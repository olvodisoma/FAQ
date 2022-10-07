import React from "react";
 
import { SingleQuestion } from "./SingleQuestion";
 
export const Questions=({data,setData})=>{
    return(
        <div className="row justify-content-between">
                 {data.map((obj)=>(
                    <SingleQuestion key={obj.id} title={obj.title} info={obj.info} />
 
             ))}
 
        </div>
    )
}