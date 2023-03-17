import React from 'react'
import { Link } from 'react-router-dom'

function ChangePassword() {
  return (
    <>
    {
        <div>
         
        <div className='background'>;
        <div className="add-user-container">
            <br></br>
            <h1 className="add-user-header text-white" >EPES - Employee Performance Evaluation System</h1>
            <div className="add-user-buttons">
                <button className="btn btn-primary"><Link to="/Login" className="add-user-link">Login</Link></button>
                <button className="btn btn-primary"><Link to="/AddUser" className="add-user-link">Add User</Link></button>
                <button className="btn btn-primary"><Link to="/ChangePassword" className="add-user-link">Change Password</Link></button>
            </div>
        </div>
        
        </div>
    
    </div>
    }
    </>
  )
}

export default ChangePassword