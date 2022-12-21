import React, { Component } from 'react'

export class States extends Component {
    constructor(props) {
      super(props)
    //  this.changeName=this.changeName.bind(this)
    
      this.state = {
        userName:"Divish",
        count:0
      }
    }
    
    changeName(event){
        this.setState({
            userName:event.target.value,
            count:this.state.count+1
        })
      }
      
  render() {
    return (
      <div>
        <h2>I am {this.state.userName} ,This is change of State</h2>
        <h2>Count of the click is: {this.state.count}</h2>
        {/* <button onClick={()=>this.changeName()}>Change Name</button> */}
        <input onChange={(event)=>this.changeName(event)}/>
      </div>
    )
  }
}

export default States