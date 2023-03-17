import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
        <button className="btn btn-primary"><Link to="/AddUser" className="add-user-link">Add User</Link></button>
                <button className="btn btn-primary"><Link to="/ChangePassword" className="add-user-link">Change Password</Link></button>
    </div>
  )
}

export default AdminDashboard