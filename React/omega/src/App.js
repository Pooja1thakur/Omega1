import {name,age} from "./person"


function App() {
  return (
    <>
    {header}
    {main}
     <div className="App">
       <h1 className={name}>{name} {age}</h1>   
           





     </div>
    </>
  );
}
const mystyle={
  color:"orange",
  border:"4px solid black"
}

const header=(
  <header style={{color:"red", backgroundColor:"blue"}}>
    <h1 style={{fontSize:"100px"}}>pooja</h1>
    <h2>thakur</h2>
  </header>
)
const main=(
  <p style={mystyle}>gyanendera</p>
)

export default App;
import React from 'react'

export default function App() {
  return (
    <div>
      
    </div>
  )
}
