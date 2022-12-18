import React, { Component } from 'react'
import "./Personal.css"

 class Personal extends Component {
  render() {
    const {name,soyad}=this.props
    return (
      <div className='Thirst'>
        <p>name:{name}</p>
        <p>soyad:{soyad}</p>
        
      </div>
    )
  }
}

export default  Personal