import axios from "axios";
import {useState} from "react"
function GetUser(){
  const[userId,setUserId] = useState(null)
  const[showFirstName,setShowFirstName] = useState([])
  const[showLastName,setShowLastName] = useState([])
  const[showEmail,setShowEmail] = useState([])
  const[showDesignation,setShowDesignation] = useState([])
  const[showDateOfBirth,setShowDateOfBirth] = useState([])
  const[showActive,setShowActive] = useState([])
  async function getUserdetails(e){
    e.preventDefault();
    setUserId("")
    try{
     const {data} =  await axios.get(`/user-management/user-details/users/${userId}`)
        console.log(data);
        data.users.map((value)=>(
          storeDetails(value)
        ))   
    }catch(err){
      console.log(err);
    }
  }

  function storeDetails(value){
    setShowFirstName(value.first_name)
    setShowLastName(value.last_name)
    setShowEmail(value.email)
    setShowDesignation(value.designation)
    setShowDateOfBirth(value.date_of_birth)
    setShowActive(value.active)
  }
  return (
    <div className="App">
    <h3>Get the user</h3>
    <form onSubmit={getUserdetails}>
      <label htmlFor="companyName">User Email ID</label>
      <input type="email" value={userId} onChange={(e)=>setUserId(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
    <p>{showFirstName}</p>
    <p>{showLastName}</p>
    <p>{showEmail}</p>
    <p>{showDesignation}</p>
    <p>{showDateOfBirth}</p>
    <p>{String(showActive)}</p>
    </div>
    )
}
export default GetUser;