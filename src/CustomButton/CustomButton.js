import React, { Component } from 'react'
import "./CustomButton.css"
export default class text extends Component {
  state={
    isActive:false,
  }

    handle=(e)=>{
      alert("warnMessage")    
    }
 
    mouse=()=>{
      this.setState({ isActive:true})
    }
   
  render() {
  
    return (
      <div  >
        <button className='btn' onClick={this.handle}   onMouseOver={this.mouse} >text</button>
        {this.state.isActive?<div className='hint'>siz hover etdiniz</div>:null}
        </div>
    )
  }
}
