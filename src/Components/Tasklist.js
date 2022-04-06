import React from 'react'

function Tasklist({tasks}) {
  return (
    <div>
{tasks.map((el)=>(<li id={el.id}>{el.text}</li>))}
    </div>
  )
}

export default Tasklist