import React, { Component} from 'react'
import USCurrencyFormat from '../CurrencyFormat'
import slugify from 'slugify'

class Selection extends Component{
    render(){
      const item = this.props.item
      const feature = this.props.feature
        return (
        <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.props.selected[feature].name}
          onChange={e => this.props.handleUpdateFeature(feature, item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
      )
    }
}

export default Selection