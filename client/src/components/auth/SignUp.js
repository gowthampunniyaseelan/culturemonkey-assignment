import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link,Navigate} from 'react-router-dom';
export default function Home() {
  const[emailId,setEmailId] = useState("");
  const[userName,setUserName] = useState("");
  const[navigate,setNavigate] = useState(false)
  async function storeUserDetails(e){
    e.preventDefault()
    await axios.post("/user-management/users",{
      username:userName,
      email:emailId
    }).then((result)=>{
      if(result.data){
        const {data} = result
        alert(data.message)
        window.localStorage.setItem("emailId",emailId)
        setNavigate(true)
      }
    })
  }
  return (
  <div>
  {navigate ? 
    <Navigate to="/login"/> : null
  }
   <form onSubmit={storeUserDetails}>
   <label htmlFor="name">Username </label>
   <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
   <label htmlFor="name">Email ID </label>
   <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required/>
   <input type="submit" />
   </form>
   <div>
    <Link to="/login">Already have an account <span style={{color:"blue"}}>Login</span></Link>
   </div>
  </div>
  )
}
