import axios from "axios";
import {useState} from "react"
import "../../static/css/company/CreateCompany.css"
function CreateCompany(){
  const[company_id,setCompanyId] = useState(null)
  const[company_name,setName] = useState(null)
  const[company_address,setAddress] = useState(null)
  // const[coordinates,setCoordinates] = useState(null)
  const[latitude,setLatitude] = useState(null)
  const[longitude,setLongitude] = useState(null)


  async function postThedetails(e){
    e.preventDefault();
    setCompanyId("")
    setName("")
    setLatitude("")
    setLongitude("")
    // setCoordinates("")
    setAddress("")
    try{
     await axios.post("/company-management",{
        company_id:company_id,
        company_name:company_name,
        company_address:company_address,
        coordinates:[latitude,longitude]
      })
      
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className="container">
    <form onSubmit={postThedetails} className="form-container">
    <h3>Create a Company</h3>
      <div className="company-id">
      <label htmlFor="name">Company ID </label>
      <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
      </div>
      
      <div className="company-name">
      <label htmlFor="name">Company Name </label>
      <input type="text" value={company_name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      
      <div className="address">
      <label htmlFor="address">Company Address </label>
      <input type="text" value={company_address} onChange={(e)=>setAddress(e.target.value)} required/>
      </div>
      
      <div className="coordinates">
      <label htmlFor="coordinates">Coordinates </label>
      </div>
      <div className="latitude">
      <label htmlFor="latitude">Latitude </label>
      <input type="text" value={latitude} onChange={(e)=>setLatitude(e.target.value)} required/>
      </div>
      <div className="longitude">
      <label htmlFor="longitude">Longitude </label>
      <input type="text" value={longitude} onChange={(e)=>setLongitude(e.target.value)} required/>
      </div>
    

      <div className="button">
      <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
    )
}
export default CreateCompany;
