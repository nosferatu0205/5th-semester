import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AuthContext } from '../authcontext/AuthContext';
import WorkerAssignment from './WorkerAssignment';


function WorkerList() {
    const [workerList, setWorkerList] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:5050/workers`).then((response) => {
            setWorkerList(response.data);
        });
    }, []);
    const [authState, setAuthState] = useState(false);
    const authenticate = (type) => {
        Axios.get("http://localhost:5050/auth", {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response) => {
            if (response.data.error) {
                setAuthState(false);
            } else {
                if (response.data.type == type) {
                    setAuthState(true);
                }
            }
        });
    }
    useEffect(() => {
        authenticate("manager");
    }, []);


    return (
        <>
            {
                authState && (
                    <div>
                        <AuthContext.Provider value={{ authState, setAuthState }}>
                            <table>
                                <thead>
                                    <th>WorkerID</th>
                                    <th>WorkerName</th>
                                    <th>specialization</th>
                                    <th>KPI</th>
                                    <th>Assigned workplace</th>
                                    <th>Details</th>
                                </thead>
                                <tbody>
                                    {
                                        workerList.map((val, key) => (
                                            <tr>
                                                <td>{val.workerID}</td>
                                                <td>{val.workerName}</td>
                                                <td>{val.specialization}</td>
                                                <td>{val.kpi}</td>
                                                <td><WorkerAssignment val={val.workerID} /></td>
                                                <td><button>details</button></td>
                                            </tr>
                                        ))

                                    }



                                </tbody>
                            </table>
                        </AuthContext.Provider>
                    </div >)
            }
        </>
    )
}

export default WorkerList