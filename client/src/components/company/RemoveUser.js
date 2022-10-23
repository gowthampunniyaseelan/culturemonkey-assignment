import axios from "axios";
import {useState} from "react"
import "../../static/css/company/RemoveUser.css"
import Navbar from "../nav/Navbar";
function RemoveUser(){
  const[emailId,setEmailId] = useState("")
  async function removeUserFromCompany(e){
    e.preventDefault();
    setEmailId("");
    try{
      await axios.delete(`/company-management/user-management/users/${emailId}`).then((result)=>{
        const {data} = result
        alert(data.message) 
      }).catch((err)=>{
        const {response}  = err
        alert(response.data.message)
      })
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <Navbar/>
    <div className="remove-container">
    <form onSubmit={removeUserFromCompany} className="remove-form-container">
    <h3 style={{fontWeight:100}}>Remove the user</h3>
    <div className="remove-email-id">
    <label htmlFor="email" style={{fontWeight:100}}>EmailID </label>
    <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} />
    </div>
    <div className="remove-button">
      <input type="submit" value="Submit" />
    </div> 
    </form>
    </div>
    </>
    )
}
export default RemoveUser;