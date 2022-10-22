import axios from "axios";
import {useState,useEffect} from "react"
import BingMapsReact from "bingmaps-react";
import "../../static/css/company/GenerateListView.css"
import Navbar from "../nav/Navbar";

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
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
       {showCompany.map(show=>(
        <tr key={show.company_id}>
          <td>{show.company_id}</td>
          <td>{show.company_name}</td>
          <td>{<BingMapsReact bingMapsKey = {process.env.REACT_APP_BING_MAP_KEY}
             height="50px"
             mapOptions={{
             navigationBarMode: "square",
            }}
            width="50px"
            viewOptions={{
            center: { latitude:show.coordinates[0], longitude: show.coordinates[1] },
            mapTypeId: "color",
            }}
            />}
          </td>
        </tr>
    ))}
    </tbody>
    </table>
    </div>
     </>
    )
}
export default GenerateListView;