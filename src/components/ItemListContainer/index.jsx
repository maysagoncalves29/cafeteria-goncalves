import ItemDetailContainer from "../ItemDetailContainer";
import ItemList from "../ItemList";

const ItemListContainer = () => {
    return (
      <div>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        At varius vel pharetra vel turpis nunc. </h3>
         <ItemList/>
         <ItemDetailContainer itemId={1}/>
         </div>
    );
  };
  
  export default ItemListContainer;