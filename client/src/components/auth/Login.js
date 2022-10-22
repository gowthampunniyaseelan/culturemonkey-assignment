import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link,Navigate} from 'react-router-dom';
import "../../static/css/auth/Login.css"
export default function Login() {
  const[emailId,setEmailId] = useState("");
  const[localStorage,setLocalStorage] = useState("")
  async function getUserDetails(e){
    e.preventDefault()
    await axios.get(`/user-management/users/${emailId}`).then((result)=>{
      // console.log(result);
      if(result.data){
        const {data} = result
       const temp =  window.localStorage.getItem("emailId",data.email)
       setLocalStorage(temp)
        alert("Login Successful")
        // setNavigate(true)
      }
    })
  }
  return (
  <div className='container'>
  {localStorage ? 
    <Navigate to="/create-company"/> : null
  }
   <form onSubmit={getUserDetails} className="form-container">
   <div className='email-id' style={{
    marginLeft:130
   }}>
   <label htmlFor="name">Email ID </label>
   <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required/>
   </div>
   <div className='button' style={{
    marginLeft:100
   }}>
   <input type="submit" />
   </div>
   </form>
   <div className='navigation-link'>
    <a style={{
      textDecoration:"none"
    }} href = "/"><span style={{color:"white",marginLeft:-550}}>New User Click Here To SignUp</span></a>
   </div>
  </div>
  )
}
