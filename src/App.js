import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import IshNumuneleri from "./component/IshNumuneleri/IshNumuneleri.js"
import Haqqinda from "./component/Haqqinda/Haqqinda.js"
import Elaqe  from "./component/Elaqe/Elaqe.js"

const App = () => {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>< a href="./">Home</a> </li>
          <li>< a href="about">About</a> </li>
        </ul>
      </nav> */}
      <ul>
      <li>
          <Link to="haqqinda">Haqqinda</Link>
        </li>
        <li>
          <Link to="/">IshNumuneleri</Link>
        </li>
      
        <li>
          <Link to="elaqe">Elaqe</Link>
        </li>
      </ul>
      <Routes>
        <Route  path="/" element={<IshNumuneleri/>}/>
        <Route  path="haqqinda" element={<Haqqinda/>}/>
        <Route  path="elaqe" element={<Elaqe/>}/>
      </Routes>
    </div>
  )
}

export default App





















// import React, {useEffect,useState } from 'react'
// import List from './List/List';
// const App=() => {

//   const[users,setUsers]=useState([])

//   useEffect (()=>{
//     fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
//   .then((res) => res.json())
//   .then((data )=> setUsers(data));
//   },[]);
  
//   return (
//     <div>
    
//   {users.map((user)=>(
//       <List 
//   name={user.name}/>

//     ))}
//     </div>
//    )
//       }
// export default App

// // import React from "react";
// // import Input from "./Input/Input";

// // function App() {
// //   return (
// //     <div>
// //       <Input/>
// //     </div>
// //   )
// // }

// // export default App;
