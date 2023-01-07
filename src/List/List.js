import React, { Component } from 'react'
import "./List.css";

export default class List extends Component {

  render() {
    const {name}=this.props;
   
    return (
      <div>
        
 <p> user name: {name}</p>
      </div>
    )
  }
}
