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
  },[])
  function setCor(cor){
    setLatitude(cor.coordinates[0])
    setLongitude(cor.coordinates[1])

    console.log(cor.coordinates[0])
    console.log(cor.coordinates[1]);
  }
  async function getTheCompanydetails(){
    try{
      const {data} = await axios.get("/company-management/company-details")
      console.log(data);
      data.map(cor=>(
        setCor(cor)
      ))
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
           <td> {
              latitude && longitude ? <BingMapsReact bingMapsKey = {process.env.REACT_APP_BING_MAP_KEY}
             height="100px"
             mapOptions={{
             navigationBarMode: "square",
            }}
            width="100px"
            viewOptions={{
            center: { latitude:"11.240984", longitude: "78.866570" },
            mapTypeId: "color",
            }}
            />
            : null
            }
            </td>
            {/* <td>{show.coordinates}</td> */}
          </tr>
        </tbody>
    ))}
    </table>
 
    </div>
    )
}
export default GenerateListView;