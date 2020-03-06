import React, { Component} from 'react'
//import USCurrencyFormat from '../CurrencyFormat'
import CartPart from './CartPart'

class Cart extends Component{

  render(){
        
    return(
      <div>
    
      <h2>Your cart</h2>
      <CartPart selected={this.props.selected} />
      </div>
    )
  }
}

export default Cart