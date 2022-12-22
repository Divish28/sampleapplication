import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component { 
    constructor(props) {
    super(props)
  
    this.state = {
       name:"Divish"
    }
  }

  componentDidMount(){
    setInterval(()=>this.setState({name:"Kumar"}),2000)
  }

  render() {
    return (
      <div>
        <PureComp name = {this.state.name}/>
        <RegularComp name = {this.state.name}/>
        <Memo name={this.state.name}/>
      </div>

    )
  }
}

export default ParentComp