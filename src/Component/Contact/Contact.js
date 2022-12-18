import React, { Component } from 'react'
import "./Contact.css"

 class Contact extends Component {
  render() {
    return (
      <div className='Second'>
      
        <p>email:{this.props.email}</p>
      </div>
    )
  }
}
export default  Contact
