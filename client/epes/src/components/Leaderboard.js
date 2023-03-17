import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import "./Leaderboard.css";

function Leaderboard() {
  const [showAll, setShowAll] = useState(false);
  const workers = [
    { name: 'John Smith', rating: 4.8, review: 'Excellent worker' },
    { name: 'Sarah Johnson', rating: 4.7, review: 'Great work!' },
    { name: 'Mike Lee', rating: 4.6, review: 'Very dependable' },
    { name: 'Emily Chen', rating: 4.5, review: 'Consistently good work' },
    { name: 'David Kim', rating: 4.4, review: 'Solid worker' },
    { name: 'Lisa Jones', rating: 4.3, review: 'Gets the job done' },
    { name: 'Daniel Park', rating: 4.2, review: 'Good worker' },
    { name: 'Jessica Chang', rating: 4.1, review: 'Pleasant to work with' },
    { name: 'Jason Chen', rating: 4.0, review: 'Fair worker' },
    { name: 'Kevin Nguyen', rating: 3.9, review: 'Needs improvement' }
  ];

  const topFiveWorkers = workers.slice(0, 5);

  const renderTableRows = () => {
    const rows = showAll ? workers : topFiveWorkers;
    return rows.map((worker, index) => (
      <tr key={index}>
        <td>{worker.name}</td>
        <td>{worker.rating}</td>
        <td>{worker.review}</td>
      </tr>
    ));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Leaderboard</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </Table>
      {!showAll && <Button color="primary" onClick={() => setShowAll(true)}>Show all workers</Button>}
    </div>
  );
}

export default Leaderboard;
