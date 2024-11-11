import './index.css';
import tree from './Assets/tree.png'
import suitCase from "./Assets/suitcase.png"

function Logo() {
  return(
    <div className="logo">
        <div className='image'>
            <img src={tree}></img>
        </div>
        <h1>FAR AWAY</h1>
        <div className='image'>
        <img src={suitCase}></img>
        </div>
    </div>
  )
}

export default Logo;