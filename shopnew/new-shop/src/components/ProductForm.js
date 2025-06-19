import './productForm.css'
import { useState } from 'react';

function ProductForm(props){

    const [title,setTitle]= useState('');
    const [date,setDate]= useState('');

    function inputchange(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }
    function datechange(event){
        setDate(event.target.value)
        // console.log(title)
        // console.log(date)
    }
    function submithandler(event){
        event.preventDefault();
        
        const dat = {
            brand: title,
            date: date
        }
        // product.push(dat)
        // product = product + dat;
        props.saveProduct(dat)
        setTitle("");
        setDate("");   
     }
    return (
        <form onSubmit={submithandler}>
            <div className='title'>
                <label>Title</label>
                <input id='inp' type='text' value={title} onChange ={inputchange}></input>
            </div>
            <div className='date_new'>
                <label>Date</label>
                <input type='date' value={date} onChange={datechange}></input>
            </div>
            <div>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}
export default ProductForm;