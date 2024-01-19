import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react';

class CartWidget extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 0,
        }
    }
    handleIncrement = () => {
        this.setState((prevState) => ({
            itemCount: prevState.itemCount + 1,
        }));
    }

    
 render() {
    const { itemCount } = this.state;
    return (
      <div className="cartShopp">
        <FontAwesomeIcon icon={faShoppingCart} className='btn-cart' onClick={this.handleIncrement} style={{ cursor: 'pointer'}}/>
        <span>{itemCount}</span>
      </div>
    );
  };
}

export default CartWidget;