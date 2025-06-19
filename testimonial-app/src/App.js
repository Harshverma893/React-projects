import React from "react";
import Card from "./components/Card";
import reviews from "./data";
import { useState } from "react";
const App = () => {
 const [index,setindex]= useState(0);

 function load(i){
  setindex(i)
 }
 console.log(index)
  return (
  <div className=" flex flex-col justify-center items-center space-y-8  w-full h-screen bg-slate-300 ">
    <div className="flex flex-col items-center justify-center ml-6">
    <h2 className="font-bold  md:text-2xl">Our Testimonials</h2>
    <div className="h-1 w-28 bg-violet-500"></div>
    </div>
    {/* {
       reviews.map((arr)=>(<Card id={reviews[index].id} name={reviews[index].name} post ={reviews[index].job} image={reviews[index].image} desc= {reviews[index].text}></Card>))
    } */}
     <Card 
        load={load} 
        currentIndex={index} 
        name={reviews[index].name} 
        job={reviews[index].job} 
        image={reviews[index].image} 
        desc={reviews[index].text}
      />
  </div>)
};

export default App;
