import React, { Component } from 'react'

export class ToggleEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         toggle:true
      }
      this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(pervState=>({toggle:!pervState.toggle}))
    }

  render() {
    return (
      <div>
        <p>This is Toggle Button</p>
        <button onClick={this.handleClick}>{this.state.toggle?"on":"off"}</button>
      </div>
    )
  }
}

export default ToggleEvent