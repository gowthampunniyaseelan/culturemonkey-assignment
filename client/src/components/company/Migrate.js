import { useState } from "react"
import axios from "axios"
import "../../static/css/company/Migrate.css"
export default function Migrate() {
// Store the user Id
const[storeId,setStoreId] = useState(null);

  // get user state
  const[userId,setUserId] = useState(null)
  const[first_name,setFirstName] = useState([])
  const[last_name,setLastName] = useState([])
  const[email,setEmail] = useState([])
  const[designation,setDesignation] = useState([])
  const[date_of_birth,setDateOfBirth] = useState([])
  const[active,setActive] = useState([])

  // put user state
  const[companyId,setCompanyId] = useState(null)

  // get the user from a company
  async function getUserdetails(e){
    e.preventDefault();
    setStoreId(userId)
    setUserId("")
    try{
     const {data} =  await axios.get(`company-management/user-management/${userId}`)
        data.users.map((value)=>(
          storeDetails(value)
        ))   
    }catch(err){
      console.log(err);
    }
  }

  function storeDetails(value){
    setFirstName(value.first_name)
    setLastName(value.last_name)
    setEmail(value.email)
    setDesignation(value.designation)
    setDateOfBirth(value.date_of_birth)
    setActive(value.active)
  }

  // put the user to the company
  async function getThedetails(e){
    e.preventDefault();
    try{
      await axios.put(`/company-management/user-management/${companyId}`,{
        first_name:first_name,
        last_name:last_name,
        email:email,
        designation:designation,
        date_of_birth:date_of_birth,
        active:active
      })
      setCompanyId("")
    }catch(err){
      console.log(err);
    }
  }
function deleteUser(){
  axios.delete(`/company-management/user-management/${storeId}`)
}
  return (
    <div className="container">
    <div style={{
      backgroundColor:"white",
      position:"absolute",
      marginTop:-400,
      width:300,
      borderRadius:10,
      height:30
    }}>
    <h3 style={{
      marginTop:1,
      marginLeft:100
    }}>Migration</h3>
    </div>
   
    <form onSubmit={getUserdetails} className="form-container1">
    <p style={{
      marginLeft:40
    }}>Enter the email Id to get the user</p>
    <div className="email-id">
    <label htmlFor="email">User Email ID </label>
    <input type="email" value={userId} onChange={(e)=>setUserId(e.target.value)} />
    </div>
    <div className="button">
    <input type="submit" value="Submit" />
    </div>
    </form>

    {/* Company Name to Migrate user */}

    
    <form onSubmit={getThedetails} className="form-container2">
    <p>Enter company Id to migrate the user</p>
    <div className="company-id">
    <label htmlFor="companyName">CompanyID </label>
    <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
    </div>
      <div className="button">
      <input type="submit" value="Submit" />
      </div>
    </form>
<div>

<button className="delete-button" onClick={deleteUser}>Delete the duplicate user</button>
</div>
    
    </div>
)}
