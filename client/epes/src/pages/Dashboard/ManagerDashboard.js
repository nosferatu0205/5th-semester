import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../../components/Navbar';


function ManagerDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [managerInformation, setManagerInformation] = useState({});
  const [authState, setAuthState] = useState(false);

  const authenticate = (type) => {
    axios.get("http://localhost:5050/auth", {
      headers: {
        accessToken: localStorage.getItem("accessToken")
      }
    }).then((response) => {
      if (response.data.error) {
        setAuthState(false);
      } else {
        if (response.data.type === type) {
          setAuthState(true)
        }
      }
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/managers/${id}`).then((response) => {
      setManagerInformation(response.data);
    });
    authenticate("manager");
  }, []);

  const goTo = (path) => {
    navigate(path);
  }

  return (
    <div className="ManagerDashboard">
      <Navbar managerInformation={managerInformation} key={id} />

      <div className="container">
                    <div className="row">
                        <div className="col-sm-8 mb-3">
                            <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }} onClick={() => goTo("/leaderboard")}>Leaderboard</button>
                        </div>
                        <div className="col-sm-8 mb-3">
                            <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }} onClick={()=>goTo("/WorkerAssignment")}>Worker Assignment</button>
                        </div>
                        <div className="col-sm-8 mb-3">
                    </div>
                        <div className="col-sm-8 mb-3">
                            <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }} onClick={() => goTo("/WorkerListDemo")}>List of Workers</button>
                            <button type="button" className="btn btn-primary btn-block" style={{ fontSize: '14px', padding: '10px' }} onClick={() => goTo("/workerEvaluation")}>Employee Evaluation</button>
                        </div>
                    </div>
                </div>
      
    </div>
  );
}

export default ManagerDashboard;