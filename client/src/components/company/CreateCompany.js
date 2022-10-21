import axios from "axios";
import {useState} from "react"
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
    <div className="App">
    <h3>Create a Company</h3>
    <form onSubmit={postThedetails}>
      <label htmlFor="name">Company ID</label>
      <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
      <label htmlFor="name">Company Name</label>
      <input type="text" value={company_name} onChange={(e)=>setName(e.target.value)} required/>
      <label htmlFor="address">Company Address</label>
      <input type="text" value={company_address} onChange={(e)=>setAddress(e.target.value)} required/>

      <label htmlFor="coordinates">Coordinates: </label>
      <label htmlFor="latitude">Latitude</label>
      <input type="text" value={latitude} onChange={(e)=>setLatitude(e.target.value)} required/>
      <label htmlFor="latitude">Longitude</label>
      <input type="text" value={longitude} onChange={(e)=>setLongitude(e.target.value)} required/>
      <input type="submit" value="Submit" />
    </form>
    </div>
    )
}
export default CreateCompany;
