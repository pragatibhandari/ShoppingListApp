import React from 'react'
import Toshop from "./Toshop"

export default function ToshopList({toshops, toggleToshop}) {
  return (
    toshops.map(toshop => {
      return <Toshop key = {toshop.id} toggleToshop = {toggleToshop} toshop = {toshop}/>
    })
  )
}