import React from 'react'

//event with perameter
function Events() {
    const getAlert=(a,b)=>alert(b.type);
  return (
    <div> This is Event
        <button onClick={(event)=>{getAlert("Alertt",event)}}>Click to get alert</button>
    </div>
  )
}

export default Events
