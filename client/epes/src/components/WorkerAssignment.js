import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function WorkerAssignment({ val }) {
  const [assignment, setAssignment] = useState(null);
  const [workers, setWorkers] = useState([
    { workerID: 1, workerName: 'John', specialization: 'sewing', kpi: 10 },
    { workerID: 2, workerName: 'Jane', specialization: 'sewing', kpi: 10 },
    { workerID: 3, workerName: 'Bob', specialization: 'sewing', kpi: 10 },
]);

  useEffect(() => {
    Axios.get(`http://localhost:5050/assign/${val}`).then((response) => {
      try {
        setAssignment(response.data.assignedWorkplace);
      } catch (err) {
        setAssignment("Not assigned");
      }
    });
  }, [val]);

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
      <h1>Worker Assignment</h1>
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Assigned Workplace</th>
          </tr>
        </thead>
        <tbody>
          <tr key={val.workerID}>
            <td>{val.workerID}</td>
            <td>{val.workerName}</td>
            <td>{val.specialization}</td>
            <td>{assignment === null ? "Loading..." : assignment}</td>
          </tr>
        </tbody>
      </table> */}
      <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Enter Worker Assignment</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {workers.map((worker) => (
                        <tr key={worker.workerID}>
                            <td>{worker.workerID}</td>
                            <td>{worker.workerName}</td>
                            <td><input className='$input-btn-padding-y:         .375rem;'/><button type='button' className='btn btn-primary'>Complete worker assignment</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  );
}

export default WorkerAssignment;
