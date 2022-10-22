import React from 'react'
import "../../static/css/nav/Navbar.css"
export default function Navbar() {
  return (
    <div className='nav-container'>
      <nav>
        <p><a href="/create-company">Create Company</a></p>
        <p><a href="/add-user">Add User</a></p>
        <p><a href="/delete-company">Delete Company</a></p>
        <p><a href="/list-company">Company Details</a></p>
        <p><a href="/get-company">Get Company</a></p>
        <p><a href="/migrate">Migrate User</a></p>
        <p><a href="/remove-user">Remove User</a></p>
        <p><a href="/update-company">Update Company</a></p>
        <p><a href="/list-user">User Details</a></p>
        <p><a href="/get-user">Get User</a></p>
        <p><a href="/update-user">Update User</a></p>
      </nav>
    </div>
  )
}
