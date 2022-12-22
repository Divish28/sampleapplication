import React, { Component } from "react";

class Inheritance extends Component{
    render(){
        return(
            <h1>This is Parent Class</h1>
        )
    }

}

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h2> This is calss component</h2>
                <Inheritance/>
            </div>
        )
    }
}

export default ClassComponent