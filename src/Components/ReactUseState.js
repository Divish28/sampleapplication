import React from 'react'
import { useState } from 'react'

function ReactUseState() {

    const [lang,changing]=useState("react")

  return (
    <div>
        <h4> This is useState, Used in {lang}</h4>
        <button onClick={()=>changing("React JS")}>Lang Change</button>
    </div>
  )
  }

export default ReactUseState