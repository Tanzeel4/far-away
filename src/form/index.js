import { useState } from 'react';
import './index.css';  

function Form( {itemList, setItemList}) {

  const [itemNumber, setitemNumber]= useState("")
  const [itemText, setitemText]= useState("")

  function addHandler (){
    const myList = [...itemList]
    myList.push({
    itemNumber,
    itemText
    })
    setItemList(myList)
  }
  return(
    <div className='mainFrom'>
      <h3>What do you need for your trip?</h3>
      <select className='dropdown' onChange={(e)=> setitemNumber(e.target.value)}> 
        {[1,2,3,4,5,6,7,8,9,10].map((elem)=>(
          <option>{elem}</option>
        ))}
      </select>
      <div>
        <input onChange={(e)=> setitemText(e.target.value)} className='inputItem' type="text" placeholder="item..."/>
      </div>
      <button onClick={addHandler} className='addBtn'>ADD</button>
    </div>
  )
}

export default Form;