import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  state = {
    name: "",
    pasport: "",
    gender: true,
  };
  handleChek = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handle = () => {
    console.log("name:  " + this.state.name);
    console.log("pasport:  " + this.state.pasport);
    console.log("gender:  " + this.state.gender);
    alert("kart qeydiyyatdan kecdi");
  };
  render() {
    return (
      <div className="container">
        <label>
          FIO
          <input
            className="fio"
            name="name"
            type="text"
            onChange={this.handleChek}
          />
        </label>

        <label>
          Pasport
          <input
            className="pasport-seriya"
            name="pasport"
            type="number"
            onChange={this.handleChek}
          />
        </label>
        <label>
          Cinsi
          <select className="gender" name="gender" onChange={this.handleChek}>
            <option value="male">Kişi</option>
            <option value="female">Qadın</option>
          </select>
        </label>
        <label>
          Yash
          <input className="age" name="yash" type="number" />
        </label>
        <label>
          E-mail
          <input className="e-mail" name="eMail" type="email" />
        </label>
        <label>
          Telephone
          <input className="telephone" name="tele" type="number" />
        </label>
        <label>
          Simptom
          <textarea className="simptom" name="text" row="5"></textarea>
        </label>
        <label>
          Tekrar qebul
          <input className="chek" type="checkbox" />
        </label>
        <button className="btn" onClick={this.handle}>
          Göndər
        </button>
      </div>
    );
  }
}
export default Input;