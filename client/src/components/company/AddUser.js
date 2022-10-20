import axios from "axios";
import {useState} from "react"
function AddUser(){
  const[company_id,setCompanyId] = useState(null)
  const[first_name,setFirstName] = useState(null)
  const[last_name,setLastName] = useState(null)
  const[email,setEmail] = useState(null)
  const[designation,setDesignation] = useState(null)
  const[date_of_birth,setDateOfBirth] = useState(null)
  const[active,setActive] = useState(true);
  async function postUserdetails(e){
    e.preventDefault();
    setCompanyId("")
    setFirstName("")
    setLastName("")
    setEmail("")
    setDesignation("")
    setDateOfBirth("")
    try{
     await axios.put(`/company-management/user-management/users/${company_id}`,{
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
  return (
    <div className="App">
    <h3>Add a User</h3>
    <form onSubmit={postUserdetails}>
      <label htmlFor="name">Company ID</label>
      <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
      <label htmlFor="name">First Name</label>
      <input type="text" value={first_name} onChange={(e)=>setFirstName(e.target.value)} required/>
      <label htmlFor="address">Last Name</label>
      <input type="text" value={last_name} onChange={(e)=>setLastName(e.target.value)} required/>
      <label htmlFor="coordinates">Email</label>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <label htmlFor="coordinates">Designation</label>
      <input type="text" value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>
      <label htmlFor="coordinates">Date of birth</label>
      <input type="date" value={date_of_birth} onChange={(e)=>setDateOfBirth(e.target.value)} required/>
      <input type="submit"/>
    </form>
    </div>
    )
}
export default AddUser;
