import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavbarSupervisor from '../../components/NavbarSupervisor';

function WorkerProfile() {
    let {id} = useParams();
    let navigate = useNavigate();
    const [ workerInformation, setWorkerInformation] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5050/workers/${id}`).then((response)=>{
            setWorkerInformation(response.data);
            console.log(response.data);
        })
    }, []
    );

    const goTo = (path) =>{
        navigate(path);
    }
  return (
    <>
    {
            <>
            
            </>
    }
    </>
  )
}

export default WorkerProfile