
import './App.css';
import Data from './components/Data';
import NewProduct from './components/NewProduct';

function App() {
  let product = [
    {brand : 'Nirma',
      day: "10",
      month: "September",
      year:"2021"
    },
    {brand : 'Sirf Excel',
      day: "02",
      month: "January",
      year:"2021"
    },
    {brand : 'Tide',
      day: "28",
      month: "March",
      year:"2031"
    },
    {brand : 'Maggie',
      day: "20",
      month: "March",
      year:"2051"
    }
  ]
  function newproduct(obj){
    console.log("i am inside app.js")
    console.log(obj)
    product.push(obj)
    console.log(product)
  }
  return (
    <div className="App">
    <NewProduct new = {newproduct}></NewProduct>
     <Data product={product}></Data>
    </div>
  );
}

export default App;
