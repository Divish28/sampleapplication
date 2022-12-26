import React, { Component, useState } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegularComp from './RegularComp'


// import React from 'react'

function ParentComp() {

  const[Name,setName]=useState("Divish")

  setInterval(()=>{setName({Name:"Kumar"})},2000)

  return (
    <div>
      <PureComp name={Name}/>
      <RegularComp name={Name}/>
      <Memo name={Name}/>
    </div>
  )
}

export default ParentComp

// export class ParentComp extends Component { 
//     constructor(props) {
//     super(props)
  
//     this.state = {
//        name:"Divish"
//     }
//   }

//   componentDidMount(){
//     setInterval(()=>this.setState({name:"Kumar"}),2000)
//   }

//   render() {
//     return (
//       <div>
//         <PureComp name = {this.state.name}/>
//         <RegularComp name = {this.state.name}/>
//         <Memo name={this.state.name}/>
//       </div>

//     )
//   }
// }

// export default ParentComp