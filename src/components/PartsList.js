import React, { Component } from "react";
import slugify from 'slugify';
import USCurrencyFormat from '../CurrencyFormat'
import Parts from './Parts'

class PartsList extends Component {


  render() {
    
    return(
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Parts features={this.props.features} selected={this.props.selected} handleUpdateFeature={this.props.handleUpdateFeature} />
      </form>
    )
  }
}

export default PartsList;
