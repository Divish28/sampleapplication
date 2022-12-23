import React from 'react'

function Memo(props) {
    console.log("Memo")
  return (
    <div>This is Memo: {props.name}</div>
  )
}

export default React.memo(Memo)