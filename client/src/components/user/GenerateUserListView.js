import axios from "axios";
import {useState,useEffect} from "react"
import "../../static/css/user/GenerateUserListView.css"
import Navbar from "../nav/Navbar";
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
    <div>
     <table className="styled-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Date of birth</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
      {
        showUser.map(show=>(
          <tr key={show.users.map((value)=>(
            value.email
        ))}>
          <td>{show.users.map((value)=>(
            <tr>
            <td>{value.first_name}</td>
            </tr>
        ))}</td>
        <td>{show.users.map((value)=>(
            <tr>
            <td>{value.last_name}</td>
            </tr>
        ))}</td>
        <td>{show.users.map((value)=>(
          <tr>
            <td>{ value.email}</td>
          </tr>
           
        ))}</td>
        <td>{show.users.map((value)=>(
          <tr>
            <td>{value.designation}</td>
          </tr>
            
        ))}</td>
        <td>{show.users.map((value)=>(
          <tr>
            <td>
              {value.date_of_birth}
            </td>
          </tr>
            
        ))}</td>
        <td>{show.users.map((value)=>(
          <tr>
            <td>
              {String(value.active)}
            </td>
          </tr>  
        ))}</td>
          </tr>
      ))}
    </tbody>
    </table>
    </div>
    </>
    )
}
export default GenerateUserListView;