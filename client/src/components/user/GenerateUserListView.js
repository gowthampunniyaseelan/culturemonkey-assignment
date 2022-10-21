import axios from "axios";
import {useState,useEffect} from "react"
import "../../static/css/user/GenerateUserListView.css"
function GenerateUserListView(){
  const[showUser,setShowUser] = useState([]);
  const[temp,setTemp] = useState([]);

  useEffect(()=>{
    getUserdetails()
  })

  async function getUserdetails(){
    try{
     const {data} = await axios.get("/user-management/user-details/users")
     console.log("This is user data",data);
     data.map(value=>(
      setTemp(value.users)
     ))
     setShowUser(temp)
     console.log(showUser);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
     <table class="styled-table">
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
          <tr style={{marginTop:-100}}>
            <td>{show.first_name}</td>
            <td>{show.last_name}</td>
            <td>{show.email}</td>
            <td>{show.designation}</td>
            <td>{show.date_of_birth}</td>
            <td>{String(show.active)}</td>
          </tr>
      ))}
    </tbody>
    </table>
    </div>
    )
}
export default GenerateUserListView;