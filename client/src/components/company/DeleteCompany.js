import axios from "axios";
import {useState} from "react";
import "../../static/css/company/DeleteCompany.css"
import Navbar from "../nav/Navbar";
function DeleteCompany(){
  const[companyId,setCompanyId] = useState("")
  async function removeUserFromCompany(e){
    e.preventDefault();
    setCompanyId("");
    try{
      await axios.delete(`/company-management/companies/${companyId}`).then((result)=>{
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
    <div className="delete-container">
    <form onSubmit={removeUserFromCompany} className="delete-form-container">
    <h3 style={{marginLeft:20,marginTop:20}}>Delete Company</h3>

    <div className="delete-company-id">
    <label htmlFor="companyName">Company ID </label>
    <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
    </div>

   <div className="delete-button">
    <input type="submit" />
   </div>
    
    </form>
    </div>
    </>
    
    )
}
export default DeleteCompany;