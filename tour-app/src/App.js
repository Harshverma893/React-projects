import './App.css';
import BigCard from './components/BigCard';
import data from './Data';
function App() {
  return (
    <div className="App">
      <BigCard data ={data}></BigCard>
    </div>
  );
}

export default App;
