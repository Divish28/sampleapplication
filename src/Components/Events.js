import React from 'react'

//event with perameter
function Events() {
    const getAlert=(a,b)=>alert(b.type);
  return (
    <div> <p>This is Event
        <button onClick={(event)=>{getAlert("Alertt",event)}}>Click to get alert</button></p>
    </div>
  )
}

export default Events
