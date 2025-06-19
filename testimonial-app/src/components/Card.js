import './Card.css'
import reviews from '../data';

function Card({name,job,image,desc,load,currentIndex}){
    const length = reviews.length;
    console.log(job)
   function previousindex(){
    load(currentIndex-1);
    if(currentIndex==0){
        load(4)
    }
    }
   function nextIndex(){
    load(currentIndex+1);
    if(currentIndex==4){
        load(0);
    }
    }

    function surprise(){
        load(Math.floor(Math.random()*5));
    }

    return(
        <div  className='shadow-slate-400 shadow-md w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[90%] sm:[70%] md:h-[60%] lg:h-[50%] xl:h-[40%] flex flex-col gap-1 items-center justify-center bg-white rounded-md relative'>
            <div className='absolute w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] xl:w-[8rem] xl:h-[8rem]   rounded-full bg-violet-500 top-[-3rem] sm:top-[-4rem] left-4 sm:left-8'>
                <img className='absolute sm:w-[6rem] sm:h-[6rem] lg:w-[8rem] lg:h-[8rem] xl:w-[8rem] xl:h-[8rem] rounded-full bg-violet-500 top-1 right-2 ' src={image}></img>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3 className='font-bold text-2xl'>{name}</h3>








 






            <h5 className='text-gray-400'>{job}</h5>
            </div>
            <div className='flex flex-wrap flex-col w-[90%] h-[52%] items-center justify-center '>
            <p className='text-4xl text-violet-600'>“</p>
            <p className='flex flex-wrap w-[100%] h-max'>{desc}</p>
            <p className='text-4xl text-violet-600'>”</p>
            </div>
            <div className='flex justify-center gap-8 items-center w-[90%] h-[10%] text-3xl font-bold text-violet-800'>
                <button onClick={previousindex}>{'<'}</button>
                <button onClick={nextIndex}>{'>'}</button>
            </div>
            <button onClick={surprise} className='bg-violet-600 text-white font-bold p-2 rounded-md' >Surprise Me</button>
        </div>
    )
}
 export default Card;