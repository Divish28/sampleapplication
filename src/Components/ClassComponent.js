import { Component } from "react";

class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.data.name} This is calss component</h2>
            </div>
        )
    }
}

export default ClassComponent