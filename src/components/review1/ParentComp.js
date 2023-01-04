import React, { Component, useEffect, useState } from 'react'
import Memo from '/home/asplap3249/Desktop/React/sampleapplication/src/components/Memo.js'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

function ParentComp() {

  const[Name,setName]=useState("Divish")

//  setInterval(()=>setName("kumar"),2000)

  // useEffect(()=>{
  //   setName(setInterval(this.setState({Name:"Kumar"}),2000))
  // })

  useEffect(() => {
    setTimeout(() => {setName("Kumar")}, 2000);
  })

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