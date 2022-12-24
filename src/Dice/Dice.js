import React, { Component } from "react";
import "./Dice.css"

class Dice extends Component {
  state = {
  key: 0
  };
  Clicked = (e) => {
    let zerr = Math.floor(Math.random() * 6 + 1);
    this.setState({
    key:zerr
    });
  };
  componentDidMount() {
    window.addEventListener("keydown", this.Clicked);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.Clicked);
  }
  render() {
    return (
      <div className="zerAt">
        <button className="btn" onClick={this.Clicked}>
          {this.state.key}
          <p className="text">Zer at</p> 
        </button>
       
      </div>
    );
  }
}
export default Dice;

