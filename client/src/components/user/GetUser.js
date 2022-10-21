import axios from "axios";
import {useState} from "react"
import "../../static/css/user/GetUser.css"
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
    <div className="container">
    <form onSubmit={getUserdetails}  className="form-container">
    <h3 style={{fontWeight:100}}>Get the user</h3>
    <div className="email-id">
    <label htmlFor="email" style={{fontWeight:100}}>User Email ID </label>
    <input type="email" value={userId} onChange={(e)=>setUserId(e.target.value)} />
    </div>  
    <div className="button">
    <input type="submit" value="Submit" />
    </div>
    </form>
    <div className="show-details">
    <p className="show-first-name">First Name - {showFirstName}</p>
    <hr />
    <p className="show-last-name">Last Name - {showLastName}</p>
    <hr />
    <p className="show-email">Email - {showEmail}</p>
    <hr />
    <p className="show-designation">Designation - {showDesignation}</p>
    <hr />
    <p className="show-dob">D-O-B - {showDateOfBirth}</p>
    <hr />
    <p className="show-active">Active - {String(showActive)}</p>
    </div> 
    </div>
    )
}
export default GetUser;