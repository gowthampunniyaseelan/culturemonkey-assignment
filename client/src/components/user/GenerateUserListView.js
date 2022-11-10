import axios from "axios";
import {useState,useEffect} from "react"
import "../../static/css/user/GenerateUserListView.css"
import Navbar from "../nav/Navbar";
import moment from "moment"
function GenerateUserListView(){
  const[showUser,setShowUser] = useState([]);

  useEffect(()=>{
    getUserdetails()
  },[])

  async function getUserdetails(){
    try{
     const {data} = await axios.get("/user-management/user-details/users")
     setShowUser(data)
     console.log(showUser);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
  <Navbar/>
  <div className="user-container">
  <ul class="user-responsive-table">
    <li class="user-table-header">
      <div class="user-col user-col-1">First Name</div>
      <div class="user-col user-col-2">Last Name</div>
      <div class="user-col user-col-3">Email</div>
      <div class="user-col user-col-4">Designation</div>
      <div class="user-col user-col-5">Date of birth</div>
      <div class="user-col user-col-6">Active</div>
    </li>
    {
        showUser.map(show=>(
        <li class="table-row" key={show.users.map((value)=>(
            value.email
        ))}>
       
        <div>{show.users.map((value)=>(
            <li>{value.first_name}</li>
        ))}</div>

        <div>{show.users.map((value)=>(
            <li>{value.last_name}</li>
        ))}</div>

        <div>{show.users.map((value)=>(
            <li>{value.email}</li>
        ))}</div>

        <div>{show.users.map((value)=>(
            <li>{value.designation}</li>
        ))}</div>

        <div>{show.users.map((value)=>(
            <li>{moment(value.date_of_birth).format("YYYY-MM-DD")}</li>
        ))}</div>

        <div>{show.users.map((value)=>(
            <li>{String(value.active)}</li>  
        ))}</div>
        </li>
      ))}
    </ul>
    </div>
    </>
    )
}
export default GenerateUserListView;