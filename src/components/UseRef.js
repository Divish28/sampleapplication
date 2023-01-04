import React from 'react'
import { useRef,useEffect } from 'react'
import RegularComp from './review1/RegularComp'

function UseRef() {
  const reference=useRef(null)
  const passwordref=useRef(null)
 useEffect(() => { 
  reference.current.focus()
  })
  
  return (
    <div>This is UseRef 
      <input ref={reference} type="text" />
    </div>
  )
}

export default UseRef

