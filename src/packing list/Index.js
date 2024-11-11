import { useState } from 'react'
import './index.css'

function PackingList({itemList, setItemList}) {
    function clearHandler (){
        setItemList([])
    }
    return (
        <div className='mainPackingList'>
            <div className='mainItems'>
                {itemList.map((i)=>(
                    <Items i={i} />
                ))}
            </div>
            <div className='packingListBtn'>
                <button className='sortBtn'>
                    <select className='sortDropDown'>
                        <option>SORT BY INPUT ORDER</option>
                        <option>SORT BY DESCRIPTION</option>
                        <option>SORT BY PACKED STATUS</option>
                    </select>
                </button>
                <button className='clearBtn' onClick={clearHandler}>CLEAR LIST</button>
            </div>
        </div>
    )
}

export default PackingList


function Items({i}) {
    const [checkbox , setCheckBox] = useState(false)

    function checkBoxHandler (){
        setCheckBox(!checkbox)
        
    }
    return (
        <div className='items'>
            <input onClick={checkBoxHandler} type='checkbox'></input>
            <h3 style={{textDecoration: checkbox? 'line-through': "none",
                textDecorationColor: "black"
             }} >{i.itemNumber} {i.itemText}</h3>
            <button className='cancelBtn'>X</button>
        </div>
    )
}