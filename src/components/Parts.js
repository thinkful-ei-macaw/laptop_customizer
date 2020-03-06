import React, {Component} from 'react'
import slugify from 'slugify';
import Selection from './Selection'

class Parts extends Component{
  

  render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));

          return (
            <Selection itemHash={itemHash} item={item} feature={feature} selected={this.props.selected} handleUpdateFeature={this.props.handleUpdateFeature} />
          );
        });
    
        //PartsList AND Parts
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
    
    return(
      features
    )
    
  }  
}


export default Parts;