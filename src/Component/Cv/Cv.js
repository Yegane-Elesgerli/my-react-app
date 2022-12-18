import React from "react";
import Personal from "../Personal/Personal";
import Experince from "../Experince/Experince";
import Contact from "../Contact/Contact";
import "./Cv.css"


function MyFunc () {
  return (
    <div className="Veb">
    <Personal name="Mehdi" soyad="Elesgerli"/>
    <Experince ishTecrubesi="3 il" isYeri="BP company"/>
    <Contact  email="mm@gmail.com"/>
    </div>
  )
}
export default  MyFunc
