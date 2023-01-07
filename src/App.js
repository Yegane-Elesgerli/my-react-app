import React, {useEffect,useState } from 'react'
import List from './List/List';
const App=() => {

  const[users,setUsers]=useState([])

  useEffect (()=>{
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
  .then((res) => res.json())
  .then((data )=> setUsers(data));
  },[]);
  
  return (
    
     users.filter((user) => user.id )
    .map((user)=>(
      <List 
  name={user.name}/>
  
    ))
  
   )
      }
export default App


