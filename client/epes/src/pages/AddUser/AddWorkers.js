import React from 'react'
import { useState } from "react";
import Axios from 'axios';


function AddWorkers() {
    const [workerName, setName] = useState("");
    const [workerID, setID] = useState("");
    const [specialization, setspecialization] = useState("");


    const addUser = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5050/workers', {
            workerName: workerName,
            workerID: workerID,
            specialization: specialization,
        }).then(() => {
            console.log('Success');
        });
    }


    return (
        <div> Add worker:
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" required onChange={(event) => {

                        setName(event.target.value);
                    }} />

                </div>
                <div className="form-group">
                    <label>Employee ID</label>
                    <input type="number" className="form-control" id="emp_ID" placeholder="Enter Employee ID" required onChange={(event) => {
                        setID(event.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label>Enter Specialization:</label>
                    <input type="text" className="form-control" id="department" placeholder="Enter Specialization" required onChange={(event) => {
                        setspecialization(event.target.value);
                    }} />
                </div>
                <button onClick={(e) => { addUser(e) }}>Add</button>
            </form>


        </div>
    )
}

export default AddWorkers