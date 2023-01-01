import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    name: "",
    pasport: "",
    mail: "",
    tele: "",
    serh: "",
    isActive: true,
  };
  handleChek = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handle = () => {
    console.log("name:  " + this.state.name);
    console.log("pasport:  " + this.state.pasport);
    console.log("email:  " + this.state.mail);
    console.log("tele:  " + this.state.tele);
    console.log("Serh:  " + this.state.serh);
    alert("Muveffeqiyyetle gonderildi");
  };
  render() {
    return (
      <form>
        <div className="container">
          <label>
            S.A.A
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
            E-mail
            <input
              className="e-mail"
              name="mail"
              type="email"
              onChange={this.handleChek}
            />
          </label>
          <label>
            Telephone
            <input
              className="telephone"
              name="tele"
              type="number"
              onChange={this.handleChek}
            />
          </label>

          <label>
            Sherh
            <textarea
              rows="5"
              cols="20"
              name="serh"
              className="sherh"
              type="textarrea"
              onChange={this.handleChek}
            />
          </label>
          <button onClick={this.handle}>Göndər</button>
          <p>{this.state.name}</p>
          <p>{this.state.pasport}</p>
          <p>{this.state.mail}</p>
          <p>{this.state.tele}</p>
          <p>{this.state.serh}</p>
        </div>
      </form>
    );
  }
}
export default Form;
