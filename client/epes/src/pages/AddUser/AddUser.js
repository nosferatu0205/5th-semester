
import React from 'react';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./AddUser.css";
function AddUser() {

    return (
        <div className="add-user-container">
            <br></br>
            <h1 className="add-user-header text-white" >Add User</h1>
            <div className="add-user-buttons">
                <button className="btn btn-primary"><Link to="/addManager" className="add-user-link">Add Manager</Link></button>
                <button className="btn btn-primary"><Link to="/addSupervisor" className="add-user-link">Add Supervisor</Link></button>
                <button className="btn btn-primary"><Link to="/addWorker" className="add-user-link">Add Worker</Link></button>
            </div>
        </div>
    );
}

export default AddUser;

