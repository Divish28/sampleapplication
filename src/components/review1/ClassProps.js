import React, { Component } from 'react'

export class State extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <h1>This is Class Props, Implemented by {this.props.userName}</h1>
      </div>
    )
  }
}

export default State