import Heading from './components/Heading';
import Coursetype from './components/Coursetype'
import Parentcard from './components/Parentcard';
import './App.css'; import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState,useEffect} from 'react'
function App() {

  const [id,setId]= useState('1')

  function fetchId(id){
    setId(id)
    
  }
 
  // console.log(id)
  return (
    <div className="App">
    <Heading></Heading>
    <Coursetype fetchId={fetchId}></Coursetype>
    <Parentcard id={id} ></Parentcard>
        <ToastContainer />
    </div>
  );
}

export default App;
