import axios from "axios";
import {useState} from "react";
import "../../static/css/company/DeleteCompany.css"
function DeleteCompany(){
  const[companyId,setCompanyId] = useState("")
  async function removeUserFromCompany(e){
    e.preventDefault();
    setCompanyId("");
    try{
      await axios.delete(`/company-management/companies/${companyId}`).then((result)=>{
        const {data} = result
        if(data.message === "Successfully Deleted"){
          alert(data.message)
        }else{
          alert("No Company Available")
        }
        console.log(result);
      })
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container">
    <form onSubmit={removeUserFromCompany} className="form-container">
    <h3 style={{fontWeight:100}}>Delete Company</h3>
    <div className="company-id">
    <label htmlFor="companyName" style={{fontWeight:100}}>Company ID </label>
    <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
    </div>
      <div className="button">
      <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
    )
}
export default DeleteCompany;