import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import NavbarSupervisor from '../../components/NavbarSupervisor';
import Leaderboard from '../../components/Leaderboard';
import { useNavigate } from 'react-router-dom';
import WorkerAttendance from '../../components/WorkerAttendance';

function SupervisorDashboard() {
    let { id } = useParams();
    let navigate = useNavigate();
    const [supervisorInformation, setSupervisorInformation] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5050/supervisors/${id}`).then((response) => {
            setSupervisorInformation(response.data);
            console.log(response.data);
        })
    }, []);

    const goTo = (path) => {
        navigate(path);
    }
    return (


        <>{
            <>
                <NavbarSupervisor supervisorInformation={supervisorInformation} key={id}></NavbarSupervisor>

                <div className="container">
      
                <div className="row">
                    
                    <div className="col-sm-8 mb-3">
                        <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }} onClick={()=>goTo("/leaderboard")}>Leaderboard</button>
                    </div>
                    <div className="col-sm-8 mb-3">
                        <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }}>Confirm Worker Assignment</button>
                    </div>
                    <div className="col-sm-8 mb-3">
                        <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }} onClick={()=>goTo("/WorkerAttendance")}>Worker Attendance</button>
                    </div>
                    <div className="col-sm-8 mb-3">
                        <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }} onClick={()=>goTo("/WorkerListDemo")}>List of Workers</button>
                    </div>
                    <div className="col-sm-8 mb-3">
                        
                    </div>
                </div>
            </div>
                

                

            </>}</>

    )
}

export default SupervisorDashboard
