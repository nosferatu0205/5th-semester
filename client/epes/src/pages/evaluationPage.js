import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SupervisorDashboard from './Dashboard/SupervisorDashboard';


function EvaluationPage() {
  const [badEvents, setBadEvents] = useState('');
  const [excellentEvents, setExcellentEvents] = useState('');
  const[rating, setRating] = useState('');
  const [greyedOut, setGreyedOut] = useState('false');
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  }
  

  const handleBadEventsChange = (event) => {
    setBadEvents(event.target.value);
  };

  const handleExcellentEventsChange = (event) => {
    setExcellentEvents(event.target.value);
  };

  const handleRatingChange = (event)=>{
    setRating(event.target.value);
  }

  const handleGreyOutClick =()=>{
    if(rating>=0 && rating <=5){
        setGreyedOut(true);
    }
  }

  return (
    <>
      (
        <div style={{ position: 'absolute', top: '10px', left: '10px', border: '1px solid black', padding: '10px' }}>
        <label htmlFor="rating">Enter rating here:</label>
        <input type="number" id="rating" />
        <button onClick={handleGreyOutClick}>Confirm entry</button>
      </div>
      <div style={{ marginTop: '100px', height:'500px' }}>
        <h2>Critical Incident Logs</h2>
        <div style={{ display: 'flex', height:'90%' }}>
          <div style={{ flex: '1', backgroundColor: 'lightpink', padding: '10px' }}>
            <h3>Bad Events</h3>
            <textarea value={badEvents} onChange={handleBadEventsChange} style={{height:'80%', width:'98%'}} />
          </div>
          <div style={{ flex: '1', backgroundColor: 'lightblue', padding: '10px' }}>
            <h3>Excellent Events</h3>
            <textarea value={excellentEvents} onChange={handleExcellentEventsChange} style={{height:'80%', width:'98%'}}/>
          </div>
        </div>
        <button onClick={goTo("/SupervisorDashboard/${id}")}>Confirm Rating and Review</button>
      </div>
      )
        
      
    </>
  );
}

export default EvaluationPage;
