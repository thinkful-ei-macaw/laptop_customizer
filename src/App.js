import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Cart from './components/Cart'
import PartsList from './components/PartsList'
import Total from './components/Total'



class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

    //updates selected to parts list and cart
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {


    //Headers AND entire Cart
    return (
      <div className="App">
       <Header />
        <main>
          <PartsList features={this.props.features} selected={this.state.selected} handleUpdateFeature={this.updateFeature} />
          <section className="main__summary">
            <Cart selected={this.state.selected} />
            <Total selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
