import './App.css';
import { CartProvider } from './components/CartContext';
import CartWidget from './components/CartWidget';
import Header from './components/Header';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
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
       <CartWidget/>
      <CartProvider>
        <div>
        <ItemListContainer/>
        <ItemDetailContainer itemId={1} />
         <CartWidget />
         <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>

        </div>
        
      </CartProvider>
      
   
      
     
    </div>
  );
}

export default App;
