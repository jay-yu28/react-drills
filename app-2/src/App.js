import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: ['Rice', 'Kimchi', 'Steak', 'Chicken', 'Fish']
    }
  }



  render() {
    let display = this.state.foods.map(el => {
      return <h2>{el}</h2>
    })

    return (
      <div className="App">
        {display}

      </div>
    );
  }
}

export default App;
