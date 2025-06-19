import './pro.css';
import {useState} from 'react'
import Date from './Date';
function Pro(props){
    // var name = props.brand;
    var [name,setName]= useState(props.brand);
    const day = props.day;
    const month = props.month;
    const year = props.year;
    function clickHandler(){
        // let p = document.querySelector(".p");
        //     p.innerHTML  = "harsh"
        setName("HARSH")
            // name= 'harsh';
        // alert("wow")
    }
    return(
        <div className="pro">
           <Date day={day} month= {month} year= {year}></Date>
           <p className ="p"> {name}</p>
           <button onClick ={clickHandler}>Add to Cart</button>
        </div>
    );
}
export default Pro;