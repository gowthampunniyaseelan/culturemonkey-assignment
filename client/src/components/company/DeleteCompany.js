import axios from "axios";
import {useState} from "react"
function DeleteCompany(){
  const[companyId,setCompanyId] = useState(null)
  async function removeUserFromCompany(e){
    e.preventDefault();
    setCompanyId("");
    try{
      await axios.delete(`/company-management/companies/${companyId}`)
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="App">
    <h3>Delete Company</h3>
    <form onSubmit={removeUserFromCompany}>
      <label htmlFor="companyName">Company ID</label>
      <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
    </div>
    )
}
export default DeleteCompany;