import "./index.css"
import bag from "./Assets/bag.png"

function Stats ({itemList}){
    return (
        <div className="mainStats">
            <div className="statsimg">
                <img src={bag}></img>
            </div>
            <h>You Have {itemList.length} items on your list, and you already packed 0 (0%)  </h>
        </div>
    )}

export default Stats