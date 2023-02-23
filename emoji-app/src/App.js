
import React,{useState,useEffect} from 'react'
import './App.css';
import Cards from './components/Cards';
import { getUniqueId } from './uniqid/uniqueId';
const my_Api='https://jsonplaceholder.typicode.com/todos'


function App() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(my_Api)
    .then(response => response.json())
    .then((json) => {
      setData(json)
    })
  },
[])


const handleAddProduct = (value) => {
  const newProduct = { id: getUniqueId(), ...value };
  // update the products state with the newProduct
          setData((preItems)=>{
            return[newProduct,...preItems]
        })
};

  return (
    <div className="App">
      <Cards data={data}/>
    </div>
  );
}

export default App;
