import React from 'react';


export const Questions=({data,setData})=> {
    console.log({data})
  return (
    <div className="row justify-content-space-between">
        {data.map((obj) => (
            <h5>{obj.title}<input type="button" value="+"/></h5>
        ))}
    </div>
  )
}
