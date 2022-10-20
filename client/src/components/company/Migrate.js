import { useState } from "react"
import axios from "axios"
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
    setCompanyId("")
    try{
      await axios.put(`/company-management/user-management/${companyId}`,{
        first_name:first_name,
        last_name:last_name,
        email:email,
        designation:designation,
        date_of_birth:date_of_birth,
        active:active
      })
    }catch(err){
      console.log(err);
    }
  }
function deleteUser(){
  axios.delete(`/company-management/user-management/${storeId}`)
}
  return (
    <div className="App">
    <h3>Get the user for migration</h3>
    <p>Enter the email Id to get the user</p>
    <form onSubmit={getUserdetails}>
      <label htmlFor="companyName">User Email ID</label>
      <input type="email" value={userId} onChange={(e)=>setUserId(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>

    {/* Company Name to Migrate user */}
    <p>Enter company Id to migrate the user</p>
    <form onSubmit={getThedetails}>
      <label htmlFor="companyName">CompanyID</label>
      <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
    <button onClick={deleteUser}>Delete the duplicate user</button>
    </div>
)}
