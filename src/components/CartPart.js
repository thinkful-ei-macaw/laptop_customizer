import React, { Component} from 'react'
import USCurrencyFormat from '../CurrencyFormat'

class CartPart extends Component{

  render(){
    
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];
      
    //CartPart has one return from map
      return (
        <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
            </div>
        </div>
        );
    });
  

    return(
        summary
    )

    
  }
  
}

export default CartPart