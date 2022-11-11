import React from 'react'
import "../../static/css/nav/Navbar.css"
import { useNavigate } from 'react-router-dom'
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import UpdateIcon from '@mui/icons-material/Update';
import UpgradeIcon from '@mui/icons-material/Upgrade';
export default function Navbar() {
  const Navigate = useNavigate()
  function logOut(){
    window.localStorage.removeItem("emailId")
    Navigate("/login")
  }
  return (
    <div className='nav-container'>
      <nav>
        <p><a  title='Create Company' href="/create-company" style={{color:'black'}}><DomainAddIcon/></a></p>
        <p><a title='Add User' href="/add-user" style={{color:'black'}}><PersonAddIcon/></a></p>
        <p><a title='Delete Company' href="/delete-company" style={{color:'black'}}><DomainDisabledIcon/></a></p>
        <p><a title='Company Details' href="/list-company" style={{color:'black'}}><BusinessIcon/></a></p>
        <p><a title='Get Company' href="/get-company" style={{color:'black'}}><ManageSearchIcon/></a></p>
        <p><a title='Migrate User' href="/migrate" style={{color:'black'}}><MoveUpIcon/></a></p>
        <p><a title='Remove User' href="/remove-user" style={{color:'black'}}><PersonRemoveIcon/></a></p>
        <p><a title='Update Company' href="/update-company" style={{color:'black'}}><UpgradeIcon/></a></p>
        <p><a title='User Details' href="/list-user" style={{color:'black'}}><GroupIcon/></a></p>
        <p><a title='Get User' href="/get-user" style={{color:'black'}}><PersonSearchIcon/></a></p>
        <p><a title="Update User" href="/update-user" style={{color:'black'}}><UpdateIcon/></a></p>
        <button title='Logout' onClick={logOut} style={{color:'black'}}><LogoutIcon/></button>
      </nav>
    </div>
  )
}
