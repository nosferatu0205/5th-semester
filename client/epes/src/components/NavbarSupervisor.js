import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarSupervisor from './SidebarSupervisor';
import './Navbar.css';
function NavbarSupervisor({ supervisorInformation }) {
    const { id } = useParams();
    const [toggleSidebar, setToggleSideBar] = useState(false);

    const setSideBar = () => {
        setToggleSideBar(!toggleSidebar);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">EPES</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={setSideBar}>Information <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Notification</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/login">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {
                toggleSidebar &&
                <SidebarSupervisor supervisorInformation={supervisorInformation} key={id}></SidebarSupervisor>
            }
        </div>
    )
}

export default NavbarSupervisor