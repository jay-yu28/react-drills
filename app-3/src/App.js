import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        "Rice",
        "Kimchi",
        "Steak",
        "Chicken",
        "Fish",
        "Noodles",
        "Pizza",
        "Eggs"
      ],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    /*let display = this.state.foods.map(el => {
      return <h2>{el}</h2>
    })*/
    let display = this.state.foods
      .filter((el, index) => {
        return el.toLowerCase().includes(this.state.userInput.toLowerCase());
      })
      .map(food => <div>{food}</div>);

    // return <h4>{this.state.foods[index]}</h4>;
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        {display}
      </div>
    );
  }
}

export default App;
