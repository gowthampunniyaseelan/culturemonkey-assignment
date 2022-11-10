import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link,Navigate} from 'react-router-dom';
import "../../static/css/auth/Signup.css"
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
    }).catch((err)=>{
      const {response} = err
      const {data} = response
      alert(data.message)
    })
  }
  return (
  <div className='container'>
  {navigate ? 
    <Navigate to="/login"/> : null
  }
   <form onSubmit={storeUserDetails} className="form-container">
   <div className='username'>
   <label htmlFor="name">Username </label>
   <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required/>
   </div>
   <div className='email-id'>
   <label htmlFor="name">Email ID </label>
   <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required/>
   </div>
   <div className='button'>
   <input type="submit" />
   </div>
   </form>
   <div className='navigation-link'>
    <a style={{
      textDecoration:"none"
    }}  href="/login"><span style={{color:"black",marginLeft:-550}}>Already have an account Login</span></a>
   </div>
  </div>
  )
}
