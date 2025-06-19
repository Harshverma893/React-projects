import './parentcard.css'
import Card from './Card';
import {useState,useEffect} from 'react'
import { apiUrl } from '../Data';
import Spinner from './Spinner';
function Parentcard({id}){

    const [arr,setarr]=useState([]);
    useEffect(()=>{
        const fetchdata  = async()=>{
            const res = await fetch(apiUrl);
            const final = await res.json();
            console.log(final)

            let a = final.data.Development;
            let b = final.data.Business;
            let c = final.data.Design;
            let d = final.data.Lifestyle;

            switch(id){
                case '1':
                setarr([...a,...b,...c,...d]);
                break;

                case "2":
                    setarr(a)
                    break;
                case "3":
                    setarr(b)
                    break;
                case "4":
                    setarr(c)
                    break;
                case "5":
                    setarr(d)
                    break;
            }
           setload(true)
        }
        fetchdata();
        // let a = fetch(apiUrl);
        // a.then((response)=>{
        //     let result= response.json();
        //    return result;
        // }).then((final)=>{
        //     // console.log(final)
        //     // final.data.Development.map((arr)=>(console.log(arr)))
        //     let a = final.data.Development;
        //     let b = final.data.Business;
        //     let c = final.data.Design;
        //     let d = final.data.Lifestyle;
        //     // if(id==="1"){
        //     //     setarr([...a,...b,...c,...d])
        //     // }
        //     switch(id){
        //         case '1':
        //         setarr([...a,...b,...c,...d]);
        //         break;

        //         case "2":
        //             setarr(a)
        //             break;
        //         case "3":
        //             setarr(b)
        //             break;
        //         case "4":
        //             setarr(c)
        //             break;
        //         case "5":
        //             setarr(d)
        //             break;
        //     }
           
        //     // console.log( Object.entries(final.data))
        // //    Object.entries(final.data).map((key,value)=>(key.map((arr)=>(console.log(arr[0].image)))));
        // })  
        // console.log(arr)
    },[id]);
     
    const [loading,setload]= useState(false)

    return(
        <div className='parentcard'>
           {
            loading ?   (arr.map((card,key)=>(<Card id={card.id} key={card.id} title={card.title} desc={card.description} img={card.image}  ></Card>))) : (<Spinner />)
           }
            
        </div>
    )
}
export default Parentcard;