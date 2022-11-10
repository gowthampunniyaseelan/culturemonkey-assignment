import { useState } from "react"
import axios from "axios"
import "../../static/css/company/Migrate.css"
import Navbar from "../nav/Navbar";
export default function Migrate() {
// Store the user Id
const[storeId,setStoreId] = useState("");

  // get user state
  const[userId,setUserId] = useState("")
  const[first_name,setFirstName] = useState([])
  const[last_name,setLastName] = useState([])
  const[email,setEmail] = useState([])
  const[designation,setDesignation] = useState([])
  const[date_of_birth,setDateOfBirth] = useState([])
  const[active,setActive] = useState([])

  // put user state
  const[companyId,setCompanyId] = useState("")

  // Toggle the button
  const[toggle,setToggle] = useState(true);
  const[togglefordeletebutton,setToggleForDeleteButton]=useState(true);

  // get the user from a company
  async function getUserdetails(e){
    e.preventDefault();
    setStoreId(userId)
    setUserId("")
    try{
     await axios.get(`company-management/user-management/${userId}`).then((result)=>{
      const {data} =  result
      setToggleForDeleteButton(false)
      data.users.map((value)=>(
        storeDetails(value)
      ))  
      alert("Success") 
     }).catch((err)=>{
      const {response}  = err
        alert(response.data.message)
     })
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
      }).then((result)=>{
          const {data} = result
          alert(data.message)
          window.location.reload();
          console.log(result);
      }).catch((err)=>{
        const {response} = err
        const {data} = response
        alert(data.message)
      })
      setCompanyId("")
    }catch(err){
      console.log(err);
    }
  }
function deleteUser(){
  axios.delete(`/company-management/user-management/${storeId}`).then((result)=>{
    const {data} = result
    if(data.message === "Successfully Deleted"){
      alert(data.message)
      setToggle(false)
    }else{
      alert("User Not available")
    } 
  })
}
  return (
    <>
      <Navbar/>
   
    <div className="migrate-container">
    <h3 style={{
      marginLeft:580,
      position:"absolute",
      color:"black",
    }}>Migration</h3>
   
    <form onSubmit={getUserdetails} className="migrate-form-container1">
    <p style={{
      marginLeft:10
    }}>Enter the email Id to get the user</p>
    <div className="migrate-email-id">
    <label htmlFor="email">User Email ID </label>
    <input type="email" value={userId} onChange={(e)=>setUserId(e.target.value)} required />
    </div>
    <div className="migrate-button">
    <input disabled={togglefordeletebutton ? false : true ||  toggle ? true : false } type="submit" value="Submit" />
    </div>
    </form>

    {/* Company Name to Migrate user */}

    
    <form onSubmit={getThedetails} className="migrate-form-container2">
    <p style={{
      marginLeft:10
    }}>Enter company Id to migrate the user</p>
    <div className="migrate-company-id">
    <label htmlFor="companyName">CompanyID </label>
    <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} required/>
    </div>
    {toggle ? <div className="migrate-button">
      <input disabled={toggle} style={{opacity:0.4,backgroundColor:"white",color:"black"}} type="submit" value="Submit" />
      </div>
      :<div className="migrate-button">
      <input type="submit" value="Submit" />
      </div>
      }
      
    </form>
{
  togglefordeletebutton ? <button className="migrate-delete-button" disabled={togglefordeletebutton} onClick={deleteUser} style={{opacity:0.4,backgroundColor:"black",color:"white"}}>Delete the duplicate user</button> 
  : <button className="migrate-delete-button" onClick={deleteUser}>Delete the duplicate user</button>
} 
    </div>
    </>
)}
