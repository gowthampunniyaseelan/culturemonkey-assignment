import { useState } from 'react'
import axios from "axios";
import Navbar from '../nav/Navbar';
import "../../static/css/user/UpdateUser.css"
export default function UpdateUser() {
  const[emailId,setEmailId] = useState("")
  const[first_name,setFirstName] = useState("")
  const[last_name,setLastName] = useState("")
  const[email,setEmail] = useState("")
  const[designation,setDesignation] = useState("")
  const[date_of_birth,setDateOfBirth] = useState("")
  const[active,setActive] = useState("")

  async function updateUserDetails(e){
    e.preventDefault();
    if(first_name && emailId){
      postFirstName()
      setFirstName("")
      setEmailId("")
    }

    if(last_name && emailId){
      postLastName()
      setLastName("")
      setEmailId("")
    }

    if(email && emailId){
      postEmail()
      setEmail("")
      setEmailId("")
    }

    if(designation && emailId){
      postDesignation()
      setDesignation("")
      setEmailId("")
    }
    if(date_of_birth && emailId){
      postDateOfBirth()
      setDateOfBirth("")
      setEmailId("")
    }
    if(active && emailId){
      postActive()
      setActive("")
      setEmailId("")
    }
    
  }

 async function postFirstName(){
  // if(first_name && emailId !== null){
    try{
      await axios.put(`/user-management/user-details/users/${emailId}`,{
        first_name:first_name
      }).then((result)=>console.log(result))
    }catch(err){
      console.log(err);
    }
  // }
  }
  async function postLastName(){
    // if(last_name && emailId !== null){
      try{
        await axios.put(`/user-management/user-details/users/${emailId}`,{
          last_name:last_name
        })
      }catch(err){
        console.log(err);
      }
    // }
  }
  async function postEmail(){
    // if(email && emailId !== null){
      try{
        await axios.put(`/user-management/user-details/users/${emailId}`,{
          email:email
        })
      }catch(err){
        console.log(err);
      }
    // }
  }
  async function postDesignation(){
      // if(designation && emailId !== null){
        try{
          await axios.put(`/user-management/user-details/users/${emailId}`,{
            designation:designation
          })
        }catch(err){
          console.log(err);
        }
      // }
    }
    async function postDateOfBirth(){
        // if(date_of_birth && emailId !== null){
          try{
            await axios.put(`/user-management/user-details/users/${emailId}`,{
              date_of_birth:date_of_birth
            })
          }catch(err){
            console.log(err);
          }
        // }
      }
      async function postActive(){
          // if(active && emailId !== null){
            try{
              await axios.put(`/user-management/user-details/users/${emailId}`,{
                active:active
              })
            }catch(err){
              console.log(err);
            }
          // }
        }
  return (
<>
  <Navbar/>   
  <div className="update-user-container">
    <form onSubmit={updateUserDetails} className="update-user-form-container">
    <h3 style={{marginLeft:0,fontWeight:700}}>Update User Details</h3>
    <div className="update-user-email-id">
    <label htmlFor="name">Email ID </label>
    <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required />
    </div>
   
    <div className="update-user-first-name">
    <label htmlFor="name">First Name </label>
    <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} />
    </div>
 
    <div className="update-user-last-name">
    <label htmlFor="name">Last Name </label>
    <input type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)} />
    </div>

    <div className="update-user-designation">
    <label htmlFor="name">Designation </label>
    <input type="text" value={designation} onChange={(e)=>setDesignation(e.target.value)} />
    </div>

    <div  className="update-user-dob">
    <label htmlFor="name">Date of birth </label>
    <input type="date" value={date_of_birth} onChange={(e)=>setDateOfBirth(e.target.value)} />
    </div>

    <div className='update-user-active'>
    <label htmlFor="name">Active </label>
    <input type="text" value={active} onChange={(e)=>setActive(e.target.value)} />
    </div> 

    <div className='update-user-email'>
    <label htmlFor="name">Email </label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>

    <div className='update-user-button'>
    <input type="submit" />
    </div>
    </form>
  </div>
    </>
    )
}
