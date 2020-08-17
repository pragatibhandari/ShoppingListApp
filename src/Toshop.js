import React from 'react'

export default function Toshop({toshop, toggleToshop}) {
  function handleToshopClick(){
    toggleToshop(toshop.id)
  }
  return (
    <div>
      <label>
        <input id = "checkbox" type = "checkbox" checked = {toshop.complete} onChange =
        {handleToshopClick}/>
        {toshop.name}
      </label>
    </div>
  )
}