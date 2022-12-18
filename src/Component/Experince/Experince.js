import React, { Component } from 'react'
import "./Experince.css"

 class Experince extends Component {
  render() {
    const {ishTecrubesi,isYeri}=this.props
    return (
      <div className='First'>
        <p >staj:<span>{ishTecrubesi}</span></p>
        <p >ish yeri::<span>{isYeri}</span></p>
      </div>
    )
  }
}
export default  Experince
