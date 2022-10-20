import axios from "axios";
import {useState} from "react"
function RemoveUser(){
  const[emailId,setEmailId] = useState(null)
  async function removeUserFromCompany(e){
    e.preventDefault();
    setEmailId("");
    try{
      await axios.delete(`/company-management/user-management/users/${emailId}`)
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="App">
    <h3>Remove the user</h3>
    <form onSubmit={removeUserFromCompany}>
      <label htmlFor="companyName">EmailID</label>
      <input type="email" value={emailId} onChange={(e)=>setEmailId(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
    </div>
    )
}
export default RemoveUser;