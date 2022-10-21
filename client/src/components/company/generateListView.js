import axios from "axios";
import {useState,useEffect} from "react"
import BingMapsReact from "bingmaps-react";

function GenerateListView(){
  const[latitude,setLatitude] = useState("")
  const[longitude,setLongitude] = useState("")
  const[showCompany,setShowCompany] = useState([]);
  useEffect(()=>{
      getTheCompanydetails()
      console.log(process.env);
  })
  async function getTheCompanydetails(){
    try{
      const {data} = await axios.get("/company-management/company-details")
      setLatitude(data[4].coordinates[0])
      setLongitude(data[4].coordinates[1])
      setShowCompany(data)
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="App">
     <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
            <th>Address</th>
            {/* <th>Coordinates</th> */}
          </tr>
        </thead>
       {showCompany.map(show=>(
        <tbody>
          <tr>
            <td>{show.company_id}</td>
            <td>{show.company_name}</td>
            {/* <td>{show.company_address}</td> */}
            {
              latitude && longitude ? <BingMapsReact bingMapsKey = {process.env.REACT_APP_BING_MAP_KEY}
             height="100px"
             mapOptions={{
             navigationBarMode: "square",
            }}
            width="100px"
            viewOptions={{
            center: { latitude:latitude, longitude: longitude },
            mapTypeId: "color",
            }}
            />
            : null
            }
            
            {/* <td>{show.coordinates}</td> */}
          </tr>
        </tbody>
    ))}
    </table>
 
    </div>
    )
}
export default GenerateListView;