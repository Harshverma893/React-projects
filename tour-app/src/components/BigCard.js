import './bigcard.css'
import Card from './Card';
import {useState} from 'react'
function BigCard({data}){
  
    const [cards,setcards]= useState(data);
    const [bol,setBol] =useState(true)
    function two(){
       setBol(false);
    }
    console.log(bol)
    function clickhandler(id){
        console.log(id)
        const newcards = cards.filter(card => card.id !== id);
        setcards(newcards)
        console.log(newcards);
        if(newcards == 0){
            console.log('yeyy')
            two();
        }
    }


    if(cards.length === 0){
        return(
            <div className='empty'>
                        <p>No Cards availbale now</p>
                        <button onClick={()=>setcards(data)}>Refresh</button>
                    </div>
        )
    }
    return(
        <div className='main '>
           { cards.map((card,key)=>(<Card id={card.id} key={card.id} del={clickhandler} data={card}></Card>))}
            {/* { bol ? (
                cards.map((card)=>(
                    <Card
                    id={card.id}
                    del={clickhandler}
                    data={card}></Card>
                )) ) : (
                    <div className='empty'>
                        <p>No Cards availbale now</p>
                        <button onClick={()=>window.location.reload()}>Refresh</button>
                    </div>
                )
            } */}
            {/* <Card  data ={data[0]} id={0} del ={clickhandler}></Card>
            <Card id={1} del ={clickhandler} data ={data[1]}></Card>
            <Card id={2} del ={clickhandler} data ={data[2]}></Card>
            <Card id={3} del ={clickhandler} data ={data[3]}></Card>
            <Card id={4} del ={clickhandler} data ={data[4]}></Card>
            <Card id={5} del ={clickhandler} data ={data[5]}></Card> */}
            {/* <Card data ={data[6]}></Card> */}
        </div>
    )
}
export default BigCard;