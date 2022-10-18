import "./App.css"
import axios from "axios"
import {useState} from "react"
function App() {
  const[name,setName] = useState("")
  const[address,setAddress] = useState("")
  const[coordinates,setCoordinates] = useState("")

  async function postThedetails(e){
    e.preventDefault();
    setName("")
    setCoordinates("")
    setAddress("")
    try{
      await axios.post("/company-management",{
        company_name:name,
        company_address:address,
        coordinates:coordinates
      })
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="App">
    <form onSubmit={postThedetails}>
      <label htmlFor="name">name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <label htmlFor="address">address</label>
      <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
      <label htmlFor="coordinates">coordinates</label>
      <input type="text" value={coordinates} onChange={(e)=>setCoordinates(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default App;
