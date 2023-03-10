import React, { Component } from 'react'

export class ComponentLifecycle extends Component {
    constructor(props) {
      super(props)
      console.log("This is Constructor")
      this.state = {
        tick: "Tik Tik"
      }
    }

    componentDidMount(){
        console.log("this is Component Did Mount")
    }

    update(){
      this.setState({
        tick:"Tok Tik"
      })
    }
    
    componentWillUnmount(){
      console.log("component Unmounted ")
    }
    

  render() {
    console.log("this is render Method")
    return (
      <div>
        <h2>This is Lifecycle of components</h2>
        <h3>Clock: {this.state.tick}</h3>
        <button onClick={()=>this.update()}>Update</button>
      </div>
    )
  }
}

export default ComponentLifecycle
