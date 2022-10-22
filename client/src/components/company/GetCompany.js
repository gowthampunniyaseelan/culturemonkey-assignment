import axios from "axios";
import {useState} from "react"
import "../../static/css/company/GetCompany.css"
function GetCompany(){
  const[companyId,setCompanyId] = useState("")
  const[showCompanyId,setShowCompanyId] = useState("")
  const[showCompanyName,setShowCompanyName] = useState("")
  const[showCompanyAddress,setShowCompanyAddress] = useState("")
  const[showCompanyLatitude,setShowCompanyLatitude] = useState("")
  const[showCompanyLongitude,setShowCompanyLongitude] = useState("")
  async function getThedetails(e){
    e.preventDefault();
    setCompanyId("")
    try{
      await axios.get(`/company-management/company-details/${companyId}`).then((result)=>{
        setShowCompanyId(result.data.company_id)
        setShowCompanyName(result.data.company_name)
        setShowCompanyAddress(result.data.company_address)
        setShowCompanyLatitude(result.data.coordinates[0])
        setShowCompanyLongitude(result.data.coordinates[1])
        alert("Success")
      }).catch(()=>{
        alert("Company ID not available")
        window.location.reload()
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="container">
    <form onSubmit={getThedetails} className="form-container">
    <h3 style={{fontWeight:100}}>Get the company</h3>
    <div className="company-id">
    <label htmlFor="companyName" style={{fontWeight:100}}>CompanyID </label>
      <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
    </div>
    <div className="button">
      <input style={{fontWeight:100}} type="submit" value="Submit" />
    </div> 
    </form>

    <div className="show-details">
    <p className="show-company-id">Company ID: {showCompanyId}</p>
    <hr />
    <p className="show-company-name">Company Name: {showCompanyName}</p>
    <hr />
    <p className="show-company-address">Address :{showCompanyAddress}</p>
    <hr />
    <p className="show-company-latitude">Latitude: {showCompanyLatitude}</p> 
    <hr />
    <p className="show-company-longitude">Longitude: {showCompanyLongitude} </p>
    </div>
    
    </div>
    )
}
export default GetCompany;