import React, { Component } from 'react'

export class States extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userName:"Divish"
      }
    }

    changeName(){
        this.setState({
            userName:"Arun"
        })
      }


  render() {
    return (
      <div>
        <h2>I am {this.state.userName} ,This is change of State</h2>
        <button onClick={()=>this.changeName()}>Change Name</button>
      </div>
    )
  }
}

export default States