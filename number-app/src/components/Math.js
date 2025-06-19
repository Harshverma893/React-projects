import './math.css'
import {useEffect} from'react'

function Math({num ,setNum}){

    function add(){
        setNum(num+1);
    }
    function sub(){
        setNum(num-1)
    }
 document.addEventListener('keydown', (e)=>{
    switch(e.key){
        case "v":
            add();
            break;
    }
 })
  
    return(
        <div className="cal">
            <button id='btn1' onClick={add}>+</button>
            <div className="line"></div>
            <p className='num'>{num}</p>
            <div className="line"></div>
            <button id='btn2' onClick={sub}>-</button>
        </div>
    );
}
export default Math;