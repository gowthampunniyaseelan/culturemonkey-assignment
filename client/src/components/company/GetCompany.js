import axios from "axios";
import {useState} from "react"
function GetCompany(){
  const[companyId,setCompanyId] = useState(null)
  const[showCompanyId,setShowCompanyId] = useState(null)
  const[showCompanyName,setShowCompanyName] = useState(null)
  const[showCompanyAddress,setShowCompanyAddress] = useState(null)
  const[showCompanyCoordinates,setShowCompanyCoordinates] = useState(null)
  async function getThedetails(e){
    e.preventDefault();
    setCompanyId("")
    try{
      await axios.get(`/company-management/company-details/${companyId}`).then((result)=>{
        setShowCompanyId(result.data.company_id)
        setShowCompanyName(result.data.company_name)
        setShowCompanyAddress(result.data.company_address)
        setShowCompanyCoordinates(result.data.coordinates)
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="App">
    <h3>Get the company</h3>
    <form onSubmit={getThedetails}>
      <label htmlFor="companyName">CompanyID</label>
      <input type="text" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
    <p>{showCompanyId}</p>
    <p>{showCompanyName}</p>
    <p>{showCompanyAddress}</p>
    <p>{showCompanyCoordinates}</p>
    </div>
    )
}
export default GetCompany;