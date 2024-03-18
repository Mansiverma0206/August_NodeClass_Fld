import { useState } from "react"

export default function Demo()
{
   const [title,setTitle] =  useState("Indore")
   const [num,setNum] =  useState(1000)
    return<div>
      <h1>Demo Component</h1>
      <b>{title} ,{num}</b><br/>
      <button onClick={()=>setTitle("MHOW")}>Change</button>
    </div>
}


// state less component =>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

