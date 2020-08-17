import React ,{ useState, useRef, useEffect}from 'react';
import ToshopList from "./ToshopList"
import uuidv4 from "uuid/v4"


const LOCAL_STORAGE_KEY = "toshopApp.toshops"

function App() {
  const[toshops, setToshops] = useState([])
  const toshopNameRef = useRef()

  useEffect(() => {
    const storedToshops = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
      if (storedToshops) setToshops(storedToshops)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toshops))
  }, [toshops])

  function toggleToshop(id){
    const newToshops = [...toshops]
    const toshop = newToshops.find(toshop => toshop.id === id)
    toshop.complete = !toshop.complete
    setToshops(newToshops)
  }

  function handleAddToshop(e){
    const name = toshopNameRef.current.value
    if (name === "") return
    setToshops(prevToshops => {
      return[...prevToshops, {id: uuidv4(), name: name, complete: false}]
    })
    toshopNameRef.current.value = null
  }

  function handleClearToshops(){
    const newToshops = toshops.filter(toshop => !toshop.complete)
    setToshops(newToshops)
  }
  return(
    < >
      <div id ="container">
        <h2>Shopping List</h2>
        <div id ="list"><ToshopList toshops = {toshops} toggleToshop = {toggleToshop}/></div>
        <input id ="text" ref={toshopNameRef} type="text"/>
        <button id = "addBtn" onClick = {handleAddToshop}>Add Items</button>
        <button id ="dltBtn" onClick = {handleClearToshops}>Delete Items</button>
        <div id ="leftToBuy"> {toshops.filter(toshop => !toshop.complete).length} Items left to buy</div>
      </div>
    </>
  )
}

export default App;