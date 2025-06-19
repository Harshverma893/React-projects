
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';


function App() {
  const item = [
    {product : "realme gt 6t",
      day :'12',
      month:'November',
      year:'2001'
    },
    {product : "Oneplus nord 4",
      day :'1',
      month:'june',
      year:'2003'
    },
    {product : "Poco f6",
      day :'23',
      month:'july',
      year:'2013'
    }
  ]
  return (
    <div>
      <Card>
      <Item item  ={item[0].product}>
        this is my favorite product among all
      </Item>
      <ItemDate day ={item[0].day} month ={item[0].month}year = {item[0].year}></ItemDate>

      <Item item  ={item[1].product}></Item>
      <ItemDate day ={item[1].day} month ={item[1].month}year = {item[1].year}></ItemDate>

      <Item item  ={item[2].product}></Item>
      <ItemDate day ={item[2].day} month ={item[2].month}year = {item[2].year}></ItemDate>

      {/* <Item item = 'oneplus nord 4'></Item>
      <ItemDate day="23" month ="July" year = "2003"></ItemDate>

      <Item item ='realme gt 6t'></Item>
      <ItemDate day="14" month="june" year="1999"></ItemDate> */}
      <div className="App">
      hello jee!
    </div>
    </Card>
    </div>
    
  );
}

export default App;
