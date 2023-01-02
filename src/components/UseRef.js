import React from 'react'
import { useRef,useEffect } from 'react'
import RegularComp from './RegularComp'

function UseRef() {
  const reference=useRef(null)
  const passwordref=useRef(null)
 useEffect(() => { 
  reference.current.focus()
  // passwordref.current.focus()
  })
  
  return (
    <div>This is UseRef 
      <input ref={passwordref} type="password"/>
      <input ref={reference} type="text" />
    </div>
  )
}

export default UseRef