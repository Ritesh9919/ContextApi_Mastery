import { useContext } from "react";
import { colorContext } from "../context";

function GrandChildComponent() {
    const color = useContext(colorContext);
    
    return (
        <>
          <h1 style={{color:color}}>Color: {color}</h1>
        </>
    )
}

export default GrandChildComponent;