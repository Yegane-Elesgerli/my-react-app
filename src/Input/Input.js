import React, { Component } from 'react'
import "./Input.css"

 class Input extends Component {
    state={
        value:"",
        pas:"",
        cins:true
    }
    handleChek=(e)=>{
        this.setState({value:e.target.value});
    }
   chek1=(e)=>{
        this.setState({pas:e.target.value})
    }
    chek2=(e)=>{
        this.setState({cins:e.target.value})
    }
  
  
    handle=()=>{
        console.log(this.state)
        alert("kart qeydiyyatdan kecdi")
    }
  render() {
    return (
      <div className='container'>
       <label>  
      FIO
      <input className="fio" name="ad-soyad" type="text" onChange={this.handleChek}/>
    </label>
    
    <label>
      Pasport
      <input className="pasport-seriya" name="pasport" type="number" onChange={this.chek1}/>
    </label>
    <label>
      Cinsi
      <select className="gender" name="gender" onChange={this.chek2}>
        <option value="male">Kişi</option>
        <option value="female">Qadın</option>
      </select>
    </label>
      <label>  
      Yash
      <input className="age" name="yash" type="number"/>
    </label>
    <label>
      E-mail
      <input className="e-mail" name="eMail" type="email"/>
    </label>
    <label>
      Telephone
      <input className="telephone" name="tele" type="number"/>
    </label>
  <label>
          Simptom
          <textarea className="simptom" name="text" row="5"></textarea>
      </label>
  <label>
    Tekrar qebul
    <input className="chek" type="checkbox"/>
  </label>
    <button className='btn' onClick={this.handle}>Göndər</button>

  <p>{this.state.value}</p>
  
  <p>{this.state.pas}</p>
  <p>{this.state.cins}</p>

      </div>
    )
  }
}
export default Input
