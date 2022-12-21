import React, { Component } from 'react'

class User extends Component {
       state={
       isFocus:"",
       yesFocus:""
       }
    
        handleFocus=()=>{
          this.setState({isFocus:"Yalnız .ru domenlərinə icazə verilir."})  
        }
        pasFocus=()=>{
          this.setState({yesFocus:"Ən azı 8 simvol"})  
        }
         
        handleBlur=()=>{
          this.setState({isFocus:""})  
        }
        pasBlur=()=>{
          this.setState({yesFocus:""})  
        }
     
  render() {
   
    return (
      <div>
        <input type=" password" onFocus={this.handleFocus} onBlur={this.handleBlur} value={this.state.isFocus}/>
        <input type="email"  onFocus={this.pasFocus} onBlur={this.pasBlur} value={this.state.yesFocus}/>"
        <button onClick>Click</button>
      </div>
    )
  }
}
export default  User 
