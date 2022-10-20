import { useState } from 'react'
import axios from "axios";
export default function UpdateUser() {
  const[emailId,setEmailId] = useState(null)
  const[first_name,setFirstName] = useState(null)
  const[last_name,setLastName] = useState(null)
  const[email,setEmail] = useState(null)
  const[designation,setDesignation] = useState(null)
  const[date_of_birth,setDateOfBirth] = useState(null)
  const[active,setActive] = useState(null)

  async function updateUserDetails(e){
    e.preventDefault();
    postFirstName()
    postLastName()
    postEmail()
    postDesignation()
    postDateOfBirth()
    postActive()
  }

 async function postFirstName(){
  setEmailId("")
  // setFirstName("")
  if(first_name && emailId !== null){
    try{
      await axios.put(`/user-management/user-details/users/${emailId}`,{
        first_name:first_name
      })
    }catch(err){
      console.log(err);
    }
  }
  setEmailId(null)
  setFirstName(null)
  }
  async function postLastName(){
    setEmailId("")
    setLastName("")
    if(last_name && emailId !== null){
      try{
        await axios.put(`/user-management/user-details/users/${emailId}`,{
          last_name:last_name
        })
      }catch(err){
        console.log(err);
      }
    }
  setEmailId(null)
  setLastName(null)
  }
  async function postEmail(){
  setEmailId("")
  setEmail("")
    if(email && emailId !== null){
      try{
        await axios.put(`/user-management/user-details/users/${emailId}`,{
          email:email
        })
      }catch(err){
        console.log(err);
      }
    }
  setEmailId(null)
  setEmail(null)
  }
  async function postDesignation(){
    setEmailId("")
    setDesignation("")
      if(designation && emailId !== null){
        try{
          await axios.put(`/user-management/user-details/users/${emailId}`,{
            designation:designation
          })
        }catch(err){
          console.log(err);
        }
      }
    setEmailId(null)
    setDesignation(null)
    }
    async function postDateOfBirth(){
      setEmailId("")
      setDateOfBirth("")
        if(date_of_birth && emailId !== null){
          try{
            await axios.put(`/user-management/user-details/users/${emailId}`,{
              date_of_birth:date_of_birth
            })
          }catch(err){
            console.log(err);
          }
        }
      setEmailId(null)
      setDateOfBirth(null)
      }
      async function postActive(){
        setEmailId("")
        setActive("")
          if(active && emailId !== null){
            try{
              await axios.put(`/user-management/user-details/users/${emailId}`,{
                active:active
              })
            }catch(err){
              console.log(err);
            }
          }
        setEmailId(null)
        setActive(null)
        }
  return (
    <div className="App">
    <h3>Update User Details</h3>
    <form onSubmit={updateUserDetails}>
    <label htmlFor="name">Email ID</label>
    <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} required />

    <label htmlFor="name">First Name</label>
    <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} />

    <label htmlFor="name">Last Name</label>
    <input type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)} />

    <label htmlFor="name">Designation</label>
    <input type="text" value={designation} onChange={(e)=>setDesignation(e.target.value)} />

    <label htmlFor="name">Date of birth</label>
    <input type="date" value={date_of_birth} onChange={(e)=>setDateOfBirth(e.target.value)} />

    <label htmlFor="name">Active</label>
    <input type="text" value={active} onChange={(e)=>setActive(e.target.value)} />

    <label htmlFor="name">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

    <input type="submit" />
    </form>
    </div>
    )
}
