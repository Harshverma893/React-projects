import './coursetype.css'
import { filterData } from '../Data';

function Coursetype({fetchId}){
    function clicked(event){
        fetchId(event.target.id)
    }
    return(
        <div className='parent'>
            {
                filterData.map((arr,key)=>(<div className='box' id={arr.id} onClick={clicked}>{arr.title}</div>))
            }
        {/* <div className='box'>All</div>
        <div className='box'>Development</div>
        <div className='box'>Business</div>
        <div className='box'>Design</div>
        <div className='box'>Lifestyle</div> */}
        </div>
    )
}
export default Coursetype;