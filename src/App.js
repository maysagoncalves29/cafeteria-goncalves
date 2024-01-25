import './App.css';
import Header from './components/Header';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import { useState } from "react";

//



const App = () => {
  const[count, setCount] = useState(0)
    const[estoque, setEstoque] = useState(0)
  return (
    <div>
      <Header/>
      <ItemCount estoque={15}
                count={count}
                setCount={setCount}/>
      <ItemListContainer/>
      
     
    </div>
  );
}

export default App;
