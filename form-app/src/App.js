import logo from './logo.svg';
import './App.css';
import {useState} from'react';
function App() {
  const [formdata,setformdata]= useState({firstname: "",favcar:"", lastname: "",mode:"" ,email: "",comments:"",isVisible:true});
  function changeHandler(event){
    const {value,name,checked,type}=event.target;
    setformdata(previousdata=>{
      return{
        ...previousdata,
        [name]: type === "checkbox"? checked : value
    }
    });
  }

  // const [first,setfirst]= useState("");
  // const [last,setlast]= useState("");
  // function getValue1(event){
  //   setfirst(event.target.value)
  // }
  // console.log(first)
  // function getValue2(event){
  //   setlast(event.target.value);
  // }
  // console.log(last)
  function submit(event){
    event.preventDefault();
    console.log("printing the whole new data....")
    console.log(formdata)

  }
  return (
    <div className="App">
     <form onSubmit={submit}>
      <input onChange={changeHandler} type='text' name='firstname' value={formdata.firstname} placeholder='first name'></input>
      <br/>
      <br/>
      <input onChange={changeHandler} type='text' name='lastname' value={formdata.lastname} placeholder='last name'></input>
      <br/>
      <br/>
      <input onChange={changeHandler} type='email' value={formdata.email} name='email' placeholder='email'></input>
      <br/>
      <br/>

      <textarea
      placeholder='enter your views'
      name='comments' onChange={changeHandler}
      value={formdata.comments}/>
      <br/>
      <br/>
      <input type='checkbox' name='isVisible' id='isVisible'
      onChange={changeHandler} 
      checked={formdata.isVisible} ></input>
      <label htmlFor='isVisible'>Am I visible?</label>
      <br/>
      <br/>
      <fieldset>
        <legend>Mode:</legend>
        <input type='radio'
      onChange={changeHandler}
      name="mode"
      id='online' 
      value="online"  
      checked={formdata.mode === "online"}
      ></input>

      <label htmlFor='online'>Online Mode</label>

      <input type='radio'
      onChange={changeHandler}
      name='mode' 
      id='offline' value="offline" checked={formdata.mode === "offline"}></input>
      <label htmlFor='offline'>offline Mode</label> 
      </fieldset>
      <label htmlFor='favcar'>Tell me your favCar : </label>
      <select onChange={changeHandler}
      name='favcar'
      id='favcar'
      value={formdata.favcar}
      >
        <option value="Ferrrai">Ferrrai</option>
        <option value="Lambo">Lambo</option>
        <option value="Bugati">Bugati</option>
      </select>
      <br/>
      <br/>
      {/* <button>Submit</button> */}
      <input type='submit' value="submit"></input>
     </form>
    </div>
  );
}

export default App;
