import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {Link,Navigate} from 'react-router-dom';
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
        // alert(data.message)
        // setNavigate(true)
      }
    })
  }
  return (
  <div>
  {localStorage ? 
    <Navigate to="/create-company"/> : null
  }
   <form onSubmit={getUserDetails}>
   <label htmlFor="name">Email ID </label>
   <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required/>
   <input type="submit" />
   </form>
   <div>
    <Link to="/">New User<span style={{color:"blue"}}>SignUp</span></Link>
   </div>
  </div>
  )
}
