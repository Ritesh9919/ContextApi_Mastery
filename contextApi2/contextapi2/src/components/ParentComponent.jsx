import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { colorContext } from "../context";
console.log(colorContext);

function ParentComponent() {
    const [color, setColor] = useState('#000');
    return (
        <>
        <h1 style={{textAlign:'center'}}>Pick  a Color</h1>
        <input style={{display:'block', margin:'10px auto 10px auto'}} type="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
        <colorContext.Provider value={color}>
        <ChildComponent color={color}/>
        </colorContext.Provider>
        </>
    )
}

export default ParentComponent;