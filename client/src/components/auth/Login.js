import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import "../../static/css/auth/Login.css"
export default function Login() {
  const[emailId,setEmailId] = useState("");
  const Navigate = useNavigate();
  async function getUserDetails(e){
    e.preventDefault()
    await axios.get(`/user-management/users/${emailId}`).then((result)=>{
      console.log(result);
      const {data} = result
       window.localStorage.setItem("emailId",data.email)
       window.localStorage.setItem("emailId",data.email)
       window.localStorage.setItem("emailId",data.email)
       window.localStorage.setItem("emailId",data.email)
       Navigate("/create-company")
    }).catch((err)=>{
      console.log(err);
      const {response} = err
      const {data} = response
      alert(data.message)
    })
  }
  return (
  <div className='login-container'>
   <form onSubmit={getUserDetails} className="login-form-container">
   <div className='login-email-id'>
   <label htmlFor="name">Email ID </label>
   <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required/>
   </div>
   <div className='login-button' style={{
    marginLeft:330
   }}>
   <input type="submit" />
   </div>
   </form>
   <div className='login-navigation-link'>
    <a style={{
      textDecoration:"none"
    }} href = "/"><span style={{color:"black",marginLeft:-550}}>New User Click Here To SignUp</span></a>
   </div>
  </div>
  
  )
}
