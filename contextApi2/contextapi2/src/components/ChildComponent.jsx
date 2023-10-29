import GrandChildComponent from "./GrandChildComponent";

function ChildComponent(props) {
    return (
      <div style={{border:"5px solid black", width:'30%', height:'10vh', padding:'10px',margin:'auto'}}>
        <GrandChildComponent color={props.color}/>
      </div>
    )
}

export default ChildComponent;