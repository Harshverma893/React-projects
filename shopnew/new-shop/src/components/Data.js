import './data.css'
import Pro from './Pro';
function Data(props){

  
    
  // function adddataobj(obj){
  //   console.log(obj)
  //   // product.push(obj)
  // }
    return(
        <div className = 'data'>
           {console.log(props.product.length)}
            
            <Pro brand ={props.product[0].brand} day = {props.product[0].day} month = {props.product[0].month} year = {props.product[0].year}></Pro>
            <Pro brand ={props.product[1].brand} day = {props.product[1].day} month = {props.product[1].month} year = {props.product[1].year}></Pro>
            <Pro brand ={props.product[2].brand} day = {props.product[2].day} month = {props.product[2].month} year = {props.product[2].year}></Pro>
            <Pro brand ={props.product[3].brand} day = {props.product[3].day} month = {props.product[3].month} year = {props.product[3].year}></Pro> 
            <Pro brand ={props.product[4].brand} day = {props.product[4].day} month = {props.product[4].month} year = {props.product[4].year}></Pro> 
            
        </div>
    )
}
export default Data;