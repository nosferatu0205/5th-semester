import React from 'react'

function WorkerListDemo() {
  const workers = [
    { workerID: 1, workerName: 'John', specialization: 'sewing', kpi:10 },
    { workerID: 2, workerName: 'Jane', specialization: 'sewing', kpi:10 },
    { workerID: 3, workerName: 'Bob', specialization: 'sewing', kpi:10 },
  ];

  return (
    <div>
      <h1>Worker List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>specialization</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker) => (
            <tr key={worker.id}>
              <td>{worker.workerID}</td>
              <td>{worker.workerName}</td>
              <td>{worker.specialization}
              </td>
              <td>
                <button onClick={() => visitProfile(worker.workerID)}>
                  Visit Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function visitProfile(id) {
    
    console.log(`Visiting profile for worker ${id}`);
  }
}

export default WorkerListDemo;