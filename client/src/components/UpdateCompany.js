import { useState } from 'react'
import axios from "axios";
export default function UpdateCompany() {
  const[company_id,setCompanyId] = useState(null)
  const[company_name,setName] = useState(null)
  const[company_address,setAddress] = useState(null)
  const[coordinates,setCoordinates] = useState(null)
  async function postThedetails(e){
    e.preventDefault();
    postCompanyName()
    postCompanyAddress()
    postCompanyCoordination()
  }

 async function postCompanyName(){
  setCompanyId("")
  setName("")
  if(company_name && company_id !== null){
    try{
      await axios.put(`/company-management/companies/${company_id}`,{
        company_name:company_name
      })
    }catch(err){
      console.log(err);
    }
  }
  setCompanyId(null)
  setName(null)
  }
  async function postCompanyAddress(){
    setCompanyId("")
    setAddress("")
    if(company_address && company_id !== null){
      try{
        await axios.put(`/company-management/companies/${company_id}`,{
          company_address:company_address
        })
      }catch(err){
        console.log(err);
      }
    }
  setCompanyId(null)
  setAddress(null)
  }
  async function postCompanyCoordination(){
  setCompanyId("")
  setCoordinates("")
    if(coordinates && company_id !== null){
      try{
        await axios.put(`/company-management/companies/${company_id}`,{
          coordinates:coordinates
        })
      }catch(err){
        console.log(err);
      }
    }
  setCompanyId(null)
  setCoordinates(null)
  }
  return (
    <div className="App">
    <h3>Update a company</h3>
    <form onSubmit={postThedetails}>
    <label htmlFor="name">Company ID</label>
    <input type="text" value={company_id} onChange={(e)=>setCompanyId(e.target.value)} required />
    <label htmlFor="name">Company Name</label>
    <input type="text" value={company_name} onChange={(e)=>setName(e.target.value)} />
    <label htmlFor="address">Company Address</label>
    <input type="text" value={company_address} onChange={(e)=>setAddress(e.target.value)} />
    <label htmlFor="coordinates">Coordinates</label>
    <input type="text" value={coordinates} onChange={(e)=>setCoordinates(e.target.value)} />
    <input type="submit" />
    </form>
    </div>
    )
}
