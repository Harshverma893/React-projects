import './card.css'
import Math from './Math';
import { useState } from 'react';
function Card(){
 
    const [num,setNum]=  useState(0);
    function reset(){
        setNum(0);
    }
    return(
        <div className="card">
            <p>Increment & Decrement</p>
            <Math num={num} setNum={setNum}></Math>
            <button onClick={reset}>RESET</button>
        </div>
    )
}
export default Card;