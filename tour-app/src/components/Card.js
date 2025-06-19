import './Card.css'
import data from '../Data';
import {useState} from 'react'
function Card(props){
    const [state,setstate]= useState(false)

    const name= props.data.name;
	const info = props.data.info;
    const [desc,setdesc]= useState(`${info.substring(0,200)}....`)
  
	const image= props.data.image;
	const price= props.data.price;

    function spanhandler(){
        setstate(!state);
        if(state==false){
            setdesc(info)
        } 
        else{
            setdesc(`${info.substring(0,200)}....`)
        }
    }
    return(

        <div className='card'>
            <img className='img' src={image}></img>
            <p className='price'>{price}</p>
            <p className='name'>{name}</p>
            <p className='info'>{desc} <span onClick={spanhandler}>
                {state ? 'show less': "read more"}</span> </p>
            <button className='btn' onClick={()=> props.del(props.id)}><span className='btntext'>Not interested</span></button>
        </div>
    )
}
export default Card;