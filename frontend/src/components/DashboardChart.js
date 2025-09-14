import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DashboardChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Interest Areas',
      data: data.values,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }]
  };

  return <Pie data={chartData} />;
}

export default DashboardChart;
