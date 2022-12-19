import React from "react";

function OtherComponent(){
    return(<h4>This is a component inside the component</h4>)
}

function FunctionalComponent(){
    return(<div><h1>This statement is Functional component</h1>
        <OtherComponent/></div>)
}

export default FunctionalComponent