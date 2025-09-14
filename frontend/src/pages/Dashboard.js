import React from 'react';
import DashboardChart from '../components/DashboardChart';

function Dashboard() {
  const data = {
    labels: ['Science', 'Arts', 'Engineering', 'Business'],
    values: [20, 30, 25, 25]
  };

  return (
    <div>
      <h2>Your Dashboard</h2>
      <DashboardChart data={data} />
    </div>
  );
}

export default Dashboard;
