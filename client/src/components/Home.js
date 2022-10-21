import React from 'react'
import { useState } from 'react'
import axios from "axios"
import App from '../App';
export default function Home() {
  const[emailId,setEmailId] = useState("");
  async function getTheUserDetails(){
    await axios.post("/user-management/users",{
      email:emailId
    }).then((result)=>{
      console.log(result);
    })
  }
  return (
  <div>
   <form onSubmit={getTheUserDetails}>
   <label htmlFor="name">Email ID</label>
   <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
   <input type="submit" />
   </form>
   <App value={emailId}/>
  </div>
  )
}
