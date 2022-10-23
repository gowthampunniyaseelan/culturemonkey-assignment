import axios from "axios";
import {useState} from "react"
import "../../static/css/user/GetUser.css"
import Navbar from "../nav/Navbar";
function GetUser(){
  const[userId,setUserId] = useState("")
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
     await axios.get(`/user-management/user-details/users/${userId}`).then((result)=>{
      const {data} = result
      console.log(result);
      if(data){
        data.users.map((value)=>(
          storeDetails(value)
        ))   
       alert("success")
       }
     }).catch((err)=>{
      console.log(err);
      const {response}  = err
      alert(response.data.message)
     })
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
    <>
  <Navbar/>
    <div className="get-user-container">
    <form onSubmit={getUserdetails}  className="get-user-form-container">
    <h3 style={{fontWeight:100}}>Get the user</h3>
    <div className="get-user-email-id">
    <label htmlFor="email" style={{fontWeight:100,marginLeft:20}}>User Email ID </label>
    <input type="email" value={userId} onChange={(e)=>setUserId(e.target.value)} />
    </div>  
    <div className="get-user-button">
    <input type="submit" value="Submit" />
    </div>
    </form>
    <div className="get-user-show-details">
    <p className="get-user-show-first-name">First Name - {showFirstName}</p>
    <hr />
    <p className="get-user-show-last-name">Last Name - {showLastName}</p>
    <hr />
    <p className="get-user-show-email">Email - {showEmail}</p>
    <hr />
    <p className="get-user-show-designation">Designation - {showDesignation}</p>
    <hr />
    <p className="get-user-show-dob">D-O-B - {showDateOfBirth}</p>
    <hr />
    <p className="get-user-show-active">Active - {String(showActive)}</p>
    </div> 
    </div>
    </>
    )
}
export default GetUser;