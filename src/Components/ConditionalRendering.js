import React, { Component } from 'react'
import { useSearchParams } from 'react-router-dom'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {

    // Using If else
    if (this.state.isLoggedIn) {
        return("User is online")
        
    } else {
        return("User is Offline ")
    }

    //Using element
    // let statement
    // if (this.state.isLoggedIn) {
    //     statement=<h1>user Online</h1>
    // } else {
    //     statement=<h1>User Offline</h1>
    // }
    //     return statement


    //terenary operator
    // return this.state.isLoggedIn?"User Online":"User Offline"


    // Short circuit operator
    // return(this.state.isLoggedIn && <h1>User Logged in</h1>)
 
     }


//     return (
//       <div>ConditionalRendering</div>
//     )
//   }
}

export default ConditionalRendering