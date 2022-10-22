import { useState } from 'react'
import axios from "axios";
import "../../static/css/company/UpdateCompany.css"

export default function UpdateCompany() {
  const[company_id,setCompanyId] = useState("")
  const[company_name,setName] = useState("")
  const[company_address,setAddress] = useState("")
  // const[coordinates,setCoordinates] = useState("")
  const[latitude,setLatitude] = useState("")
  const[longitude,setLongitude] = useState("")

  async function postThedetails(e){
    e.preventDefault();
    if(company_name && company_id){
      postCompanyName()
      setCompanyId("")
      setName("")
    }
    if(company_address && company_id){
      postCompanyAddress()
      setCompanyId("")
      setAddress("")
    }
    if(latitude && longitude && company_id){
      postCompanyLatitudeAndLongitude()
      setCompanyId("")
      setLatitude("")
      setLongitude("")
    }
   
  }

 async function postCompanyName(){
  // if(company_name && company_id !== null){
    try{
      await axios.put(`/company-management/companies/${company_id}`,{
        company_name:company_name
      }).then(()=>{
      })
    }catch(err){
      console.log(err);
    // }
  }
  }
  async function postCompanyAddress(){
    // if(company_address && company_id !== null){
      try{
        await axios.put(`/company-management/companies/${company_id}`,{
          company_address:company_address
        }).then(()=>{
        })
      }catch(err){
        console.log(err);
      // }
    }
 
  }
  async function postCompanyLatitudeAndLongitude(){
 
    // if(coordinates && company_id !== null){
      try{
        await axios.put(`/company-management/companies/${company_id}`,{
          coordinates:[latitude,longitude]
        }).then(()=>{
        })
      }catch(err){
        console.log(err);
      // }
    }
  }
  return (
<div className="container">
  <form onSubmit={postThedetails} className="form-container">
  <h3 style={{fontWeight:100}}>Update a company</h3>
  <div className="company-id">
    <label htmlFor="name">Company ID </label>
    <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
  </div>
  <div className="company-name">
    <label htmlFor="name">Company Name </label>
    <input type="text" value={company_name} onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="address">
   <label htmlFor="address">Company Address </label>
   <input type="text" value={company_address} onChange={(e)=>setAddress(e.target.value)} />
  </div>
  <div className="coordinates">
    <label htmlFor="coordinates">Coordinates </label>
  </div>
  <div className="latitude">
    <label htmlFor="latitude">Latitude </label>
    <input type="text" value={latitude} onChange={(e)=>setLatitude(e.target.value)}/>
  </div>
  <div className="longitude">
    <label htmlFor="longitude">Longitude </label>
    <input type="text" value={longitude} onChange={(e)=>setLongitude(e.target.value)}/>
  </div>
  <div className="button">
    <input type="submit" />
    </div>
  </form>
</div>
    )
}
