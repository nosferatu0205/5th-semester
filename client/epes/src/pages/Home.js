import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
         
        <div className='background'>;
        <div className="add-user-container">
            <br></br>
            <h1 className="add-user-header text-white" >EPES - Employee Performance Evaluation System</h1>
            <div className="add-user-buttons">
                <button className="btn btn-primary"><Link to="/Login" className="add-user-link">Login</Link></button>
                
            </div>
        </div>
        
        </div>
    
    </div>
  )
  
}

export default Home