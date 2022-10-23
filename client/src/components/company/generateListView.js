import axios from "axios";
import {useState,useEffect} from "react"
import "../../static/css/company/GenerateListView.css"
import Navbar from "../nav/Navbar";
import Map from "../util/Map";

function GenerateListView(){
  const[showCompany,setShowCompany] = useState([]);
  useEffect(()=>{
      getTheCompanydetails()
  },[])
  async function getTheCompanydetails(){
    try{
      const {data} = await axios.get("/company-management/company-details")
      console.log(data);
      setShowCompany(data)
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <Navbar/>
   
    <div>
     <table class="styled-table">
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
            <th style={{
              marginLeft:300,
              position:"absolute"
            }}>Address</th>
          </tr>
        </thead>
        <tbody>
       {showCompany.map(show=>(
        <tr key={show.company_id}>
          <td>{show.company_id}</td>
          <td>{show.company_name}</td>
          <td>{<Map value={{lat:Number(show.coordinates[0]),lng:Number(show.coordinates[1]),address:show.company_address}}/>}</td> 
        </tr>
    ))}
    </tbody>
    </table>
    </div>
     </>
    )
}
export default GenerateListView;