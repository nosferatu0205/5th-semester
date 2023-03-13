import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Employee Performance Evaluation System</a>
                <br/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                            <Link to="/Home" className='nav-link'>Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/Dashboard" className='nav-link'>Dashboard</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/Login" className='nav-link'>Login</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/AddUser" className='nav-link'>Add New User</Link>
                        </li>
                        

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar