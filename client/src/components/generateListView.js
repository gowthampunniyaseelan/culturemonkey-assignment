import axios from "axios";
import {useState,useEffect} from "react"
function GenerateListView(){
  const[showCompany,setShowCompany] = useState([]);
  useEffect(()=>{
      getTheCompanydetails()
  },[])
  async function getTheCompanydetails(){
    try{
      const {data} = await axios.get("/company-management/company-details")
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
            <th>Coordinates</th>
          </tr>
        </thead>
       {showCompany.map(show=>(
        <tbody>
          <tr>
            <td>{show.company_id}</td>
            <td>{show.company_name}</td>
            <td>{show.company_address}</td>
            <td>{show.coordinates}</td>
          </tr>
        </tbody>
    ))}
    </table>
    </div>
    )
}
export default GenerateListView;