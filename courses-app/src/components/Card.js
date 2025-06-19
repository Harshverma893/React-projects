import './card.css'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcLike,FcLikePlaceholder } from "react-icons/fc";

function Card({img,title,desc,id,key}){
    const [des,newdes]=useState(`${desc.substring(0,80)}...`);
    const[zindex,setz]=useState(1);
    const notify = (event)=>{
       console.log("check: "+event.currentTarget.id)
       
       if(event.currentTarget.id==1){
        toast.warning("Disliked!!!")
       }
      else if(event.currentTarget.id==2){
      
       toast.success("Liked!")
       }
     
      setz(zindex=== 1?2:1);
    }
  
    return(
        <div className='card' > 
            <img className='img' src={img.url}></img>
            <h2>{title}</h2>
            <p> {des}</p>
            <button className='icon'>
                <span className='liked' id="1" onClick={notify} style={{zIndex: zindex === 1 ? 1 : 2}}>
                <FcLike  fontSize="1.75rem" />
                </span>
                <span className='unliked' id="2" onClick={notify} style={{zIndex: zindex === 1 ? 2 : 1}}>
                <FcLikePlaceholder    fontSize="1.75rem" />
                </span>
                
            </button>
        </div>
       
    )
}
export default Card;