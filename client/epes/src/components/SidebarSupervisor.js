import React from 'react'


function SidebarSupervisor({ supervisorInformation }) {

    return (
        <div>
            <div className="card w-25">
                <div className="card-body">
                    <h5 className="card-title">ID: {supervisorInformation.supervisorID}</h5>
                    <p className="card-text">Name: {supervisorInformation.supervisorName}</p>
                    <p className="card-text">Department: {supervisorInformation.department}</p>
                </div>
            </div>
            <p></p>
        </div>
    )
}

export default SidebarSupervisor;
