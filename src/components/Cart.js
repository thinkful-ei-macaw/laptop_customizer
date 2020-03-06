import React, { Component} from 'react'
//import USCurrencyFormat from '../CurrencyFormat'
import CartPart from './CartPart'

class Cart extends Component{

  render(){
      
    
    
        //CartPart has one return from map
        
    return(
      <CartPart selected={this.props.selected} />
    )

  }
}

export default Cart