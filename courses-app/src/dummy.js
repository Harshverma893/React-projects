// iwas using these codes in the app.js previously but now i am pouttin all codes here for memory of learned lessons of USEEFFECT...

import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const[text,settext]=useState('');
  const [name,setname]= useState('love');

  //variation1 runs in every render
  // useEffect(()=>{
  //   console.log('rendewring done!')      
  //   console.log(text);
  // })
  //  // variation:2 run in only one render 
  // useEffect(()=>{
  //   console.log('rendewring done!')
  //   console.log(text);
  // })
   // variation:3 run in only text state dependency is changing 
  // useEffect(()=>{
  //   console.log('rendewring done!')
  //   console.log(text);
  // },[name])
   // variation:4 run to remove the older function/text/onclick and add new function 
  useEffect(()=>{
    // console.log('rendewring done!')
    // console.log(text);
    console.log(text +': added');
    return (()=>{
      console.log(text + ": replaced");
    })
  },[text])
  function changeHandler(event){
    
    settext(event.target.value);
  }
  return (
    <div className="App">
     <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
