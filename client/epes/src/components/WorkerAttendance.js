import React, { useState } from 'react';
import { Input } from 'reactstrap';
import NavbarSupervisor from './NavbarSupervisor';

function WorkerAttendance() {
    const [workers, setWorkers] = useState([
        { workerID: 1, workerName: 'John', specialization: 'sewing', kpi: 10 },
        { workerID: 2, workerName: 'Jane', specialization: 'sewing', kpi: 10 },
        { workerID: 3, workerName: 'Bob', specialization: 'sewing', kpi: 10 },
    ]);

    const handleOnChangeAgreement = (workerID, value) => {
        setWorkers(prevState => {
            const updatedWorkers = [...prevState];
            const workerIndex = updatedWorkers.findIndex(worker => worker.workerID === workerID);
            updatedWorkers[workerIndex].attendance = value;
            return updatedWorkers;
        });
    };

    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          EPES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Notification
              </a>
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
            
            <h1>Worker List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {workers.map((worker) => (
                        <tr key={worker.workerID}>
                            <td>{worker.workerID}</td>
                            <td>{worker.workerName}</td>
                            <td>{worker.specialization}</td>
                            <td>
                                <Input
                                    name={`attendance-${worker.workerID}`}
                                    type="checkbox"
                                    label="Present"
                                    checked={worker.attendance}
                                    onChange={(e) => handleOnChangeAgreement(worker.workerID, e.target.checked)}
                                />
                                Present?
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }}>Confirm Attendance</button>
        </div>
    );
}

export default WorkerAttendance;
