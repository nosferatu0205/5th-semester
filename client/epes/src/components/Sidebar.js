import React from 'react'

import "./Sidebar.css";
import "./Navbar.css";

function Sidebar({ managerInformation }) {
    console.log(managerInformation.managerID);
    return (
        
        <div>
                <div className="card-body">
                    <h5 className="card-title">ID: {managerInformation.managerID}</h5>
                    <p className="card-text">Name: {managerInformation.managerName}</p>
                    <p className="card-text">Department: {managerInformation.department}</p>
                </div>

                
            </div>
            
    )
}

export default Sidebar;
