import React from 'react'
import { useNavigate } from 'react-router-dom';

function WorkerEvaluation() {
  const workers = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];

  let navigate = useNavigate();
  const goTo = (path) => {
    navigate(path);
  }

  return (
    <div>
      <h1>Worker List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr key={worker.id}>
              <td>{worker.id}</td>
              <td>{worker.name}</td>
              <td>
                <button onClick={() => goTo("/evaluationPage")}>
                  Evaluate Employee
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
}

export default WorkerEvaluation;