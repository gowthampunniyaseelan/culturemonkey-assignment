import axios from "axios";
import {useState,useEffect} from "react"
import BingMapsReact from "bingmaps-react";
import "../../static/css/company/GenerateListView.css"
import Navbar from "../nav/Navbar";

function GenerateListView(){
  // const[latitude,setLatitude] = useState("")
  // const[longitude,setLongitude] = useState("")
  const[showCompany,setShowCompany] = useState([]);
  useEffect(()=>{
      getTheCompanydetails()
  },[])
  // function setCor(cor){
  //   setLatitude(cor.coordinates[0])
  //   setLongitude(cor.coordinates[1])
  // }
  async function getTheCompanydetails(){
    try{
      const {data} = await axios.get("/company-management/company-details")
      console.log(data);
      // data.map(cor=>(
      //   setCor(cor)
      // ))
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
            {/* <th>Coordinates</th> */}
          </tr>
        </thead>
        <tbody>
       {showCompany.map(show=>(
        <tr key={show.company_id}>
          <td>{show.company_id}</td>
          <td>{show.company_name}</td>
            {/* <td>{show.company_address}</td> */}
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
            {/* <td>{show.coordinates}</td> */}
        </tr>
    ))}
    </tbody>
    </table>
    </div>
     </>
    )
}
export default GenerateListView;