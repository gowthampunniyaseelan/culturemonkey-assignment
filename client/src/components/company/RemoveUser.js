import axios from "axios";
import {useState} from "react"
import "../../static/css/company/RemoveUser.css"
function RemoveUser(){
  const[emailId,setEmailId] = useState("")
  async function removeUserFromCompany(e){
    e.preventDefault();
    setEmailId("");
    try{
      await axios.delete(`/company-management/user-management/users/${emailId}`).then((result)=>{
        const {data} = result
        if(data.message === "Successfully Deleted"){
          alert(data.message)
        }else{
          alert("No user available")
        } 
      })
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container">
    <form onSubmit={removeUserFromCompany} className="form-container">
    <h3 style={{fontWeight:100}}>Remove the user</h3>
    <div className="email-id">
    <label htmlFor="email" style={{fontWeight:100}}>EmailID </label>
    <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} />
    </div>
    <div className="button">
      <input type="submit" value="Submit" />
    </div> 
    </form>
    </div>
    )
}
export default RemoveUser;